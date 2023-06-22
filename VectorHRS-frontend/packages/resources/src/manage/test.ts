/**
 * @author: Javad Hatami
 * Date: 2022-April-27
 * This resource layer is a vue reactive layer.
 */
import { instance } from '@lerkaka/api';
import type { ResourceParams } from '@lerkaka/api';

import type {
  ErrorFunctions,
  Notification,
  KeepAliveType,
  Annotations,
  ResourceObject,
  GennericAnnotationsArray,
  ModelTypes, ResourceId,
} from '../types/genericTypes';

import { PrnNotificationTypes } from '../types/genericTypes';
import { computed, reactive, ref, unref, watch } from 'vue';
import type { ComputedRef, Ref } from 'vue';

import { throttle } from 'lodash';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import type {
  RelatedResources,
  ResourceList,
  ResourceOptions,
} from '../types/dataLayerTypes';
import { hid } from '../cache/hash';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import type {
  Data,
  LerkakaOptionsType,
  KeepAliveEvents,
  Params,
  ResultFileType,
  ResultItemType,
  ResultListType,
  ResultRelatedItemsType,
  ResultSessionType,
  ThemeOptionsDic,
} from '../types/reactiveLayerTypes';
import '../utils/locationChange';

import { Resources } from './dataLayer';
import getStatus from '../utils/getStatus';
import ResourceCache from '../cache/ResourceCacheRef';
import * as resourceObjects from '../server/';
import * as ResourcesAnnotations from '../annotations/index';

class ResourceManager {
  /* reactive global data*/
  GLOBAL_DATA: ResourceCache;
  QUERIED_DATA: ResourceCache;
  LOADING: Ref<boolean>;
  eventStream: any;
  private THEME_DATA: Ref<ThemeOptionsDic>;
  private lastestResource: Ref<ResourceObject | undefined>;
  private numberOfPendingRequestsPerResource: Ref<any>;
  private numberOfRequestsPerResource: Ref<any>;
  private notifications: Ref<Notification[]>;
  private notificationId: Ref<number>;
  private resourceGlobal: Resources;
  private numberOfinstancesPerResource: any[];
  private numberOfPendingRequests: Ref<number>;
  private silentNotification: boolean;
  private globalErrorFunction?: (err: any) => void;
  private SessionResource:
    | {
        resource: ResourceObject;
        logOutFunction: (args?: any) => void;
        lockFunction: (args?: any) => void;
        logInFunction: (args?: any) => void;
        unLockFunction: (args?: any) => void;
      }
    | undefined;
  appData: Ref<any>;
  currentUserId: Ref<number>;
  eketorpHostName: Ref<string>;
  currentOrganizatioId: Ref<number>;
  PUSHPIN_CHANNEL_NAME: string | URL;
  debugMode: boolean;
  /**
   *  vue Reactive layer item for resources.
   *  This class creates internal "reactive" GLOBAL_DATA , QUERIED_DATA
   *  @param baseURL - baseURL for the instance.
   *  @param themeOptions - theme Options reactive dictionary.
   */
  constructor(
    baseURL?: string,
    themeOptions?: ThemeOptionsDic,
    PusherChannel = '/events/',
  ) {
    if (baseURL) {
      instance.defaults.baseURL = baseURL;
    } else {
      instance.defaults.baseURL = '';
    }

    const gennericAnnotations:GennericAnnotationsArray = ResourcesAnnotations;

    if (gennericAnnotations) {
      Object.keys(gennericAnnotations).forEach((key) => {
        this.setAnnotations(
          gennericAnnotations[key].resourceObject,
          gennericAnnotations[key].annotations,
        );
      });
    }

    /* Create local InternalCached Resource */
    this.GLOBAL_DATA = new ResourceCache();
    this.QUERIED_DATA = new ResourceCache();
    this.silentNotification = true;
    this.currentUserId = ref(0);
    this.appData = ref();
    this.debugMode = false;
    this.eketorpHostName = ref('');
    this.currentOrganizatioId = ref(0);
    this.lastestResource = ref<any>();
    this.notifications = ref<Notification[]>([]);
    this.numberOfPendingRequestsPerResource = ref<any>([]);
    this.numberOfRequestsPerResource = ref<any>([]);
    this.numberOfinstancesPerResource = [];
    this.numberOfPendingRequests = ref(0);
    this.notificationId = ref(0);
    this.LOADING = ref<boolean>(false);
    this.resourceGlobal = new Resources();
    this.PUSHPIN_CHANNEL_NAME = PusherChannel;

    if (themeOptions) {
      this.THEME_DATA = ref<ThemeOptionsDic>(themeOptions);
    } else {
      this.THEME_DATA = ref<ThemeOptionsDic>({ theme: { main: 'dark' } });
    }
  }

  /**
   *  Initialize the framework.
   * @param silentGenericSuccess -  silent notification onSuccess, default is true.
   * @param silentGenericError - silent notification onError, default is false.
   * @param usePushpin - using pushpin default is true.
   * @param registerGlobalErrorNotification - register global error notifications that are being called for every error403, error401, error404 , error500 (It is not silent by default).
   * @param registerGlobalSuccessNotification - register global sucess notifications that are being called onSuccess (It is silent by default).
   * @param baseURL - baseURL
   * @param themeOptions - A dictianary for themes
   */
  init = (options: LerkakaOptionsType) => {
    if (typeof options.silentNotification === 'undefined') {
      options.silentNotification = true;
    }

    if (typeof options.silentGenericError === 'undefined') {
      options.silentGenericError = true;
    }

    if (typeof options.usePushpin === 'undefined') {
      options.usePushpin = true;
    }

    if (options.baseURL) {
      instance.defaults.baseURL = options.baseURL;
    }

    if (options.themeOptions) {
      this.THEME_DATA = ref<any>(options.themeOptions.theme);
    }

    this.silentNotification = options.silentNotification;

    const onError = (err: any) => {
      if (this.globalErrorFunction) {
        this.globalErrorFunction(err);
      }
    };

    const errfunctions: ErrorFunctions = {
      error404: (err) => {
        if (!options.silentGenericError) {
          this.addNotification({
            text: 'Not found',
          });
        }

        onError(err);
        console.warn(
          'The client request has not been completed because it is not found',
        );
      },
      error403: (err) => {
        if (!options.silentGenericError) {
          this.addNotification({
            text: 'Authentication fails',
          });
        }

        onError(err);
        console.warn(
          'The client request has not been completed because it lacks valid authentication credentials for the requested resource',
        );
      },
      error400: (err) => {
        if (!options.silentGenericError) {
          this.addNotification({
            text: 'request fails',
          });
        }

        onError(err);
        console.warn(
          'The client request has not been completed because it lacks valid credentials for the requested resource',
        );
      },
      error401: (err) => {
        if (!options.silentGenericError) {
          this.addNotification({
            text: 'Authentication fails',
          });
        }

        onError(err);
        console.warn(
          'The client request has not been completed because it lacks valid authentication credentials for the requested resource',
        );
      },
      error500: (err) => {
        if (!options.silentGenericError) {
          this.addNotification({
            text: 'Server fails',
          });
        }

        onError(err);
        console.warn('The client request has not been completed. server fails');
      },
    };

    /* Register global error behaviour */
    if (options.registerGlobalErrorFunctions) {
      this.resourceGlobal.initErrorFunctions(
        options.registerGlobalErrorFunctions,
      );
    } else {
      this.resourceGlobal.initErrorFunctions(errfunctions);
    }

    if (options.registerGlobalSuccessFunctions) {
      this.resourceGlobal.initSuccessFunctions(
        options.registerGlobalSuccessFunctions,
      );
    }

    if (options.usePushpin) {
      this.initPushPin(this.pushPinUpdateCache);
    }

    if (options.useSession) {
      this.initSession();
    }

    if (options.useKeepAlive) {
      this.initKeepAlive();
    }
  };

  /**
   * Initialize pushpin for resoruces.
   *  @param updateFunction - updateFunction gets the incomming event and create true false condition.
   *  @param reconnectFrequencyMiliSeconds - reconnect to event channel FrequencyMiliSecondse.
   *  @param attemptsLimit - number of the attempts for connection.
   */
  private initPushPin = (
    updateFunction: (parsedEvent: {
      channel: string;
      event: string;
      content: any;
    }) => Promise<boolean>,
    reconnectFrequencyMiliSeconds = 1000,
    attemptsLimit = 200,
  ) => {
    let timeoutFunc = 0;
    let attempts = 0;
    let alreadyCalled = false;
    const connectFunc = () => {
      attempts++;
      clearTimeout(timeoutFunc);

      if (!alreadyCalled && attempts <= attemptsLimit) {
        timeoutFunc = window.setTimeout(() => {
          setupEventSource();
        }, reconnectFrequencyMiliSeconds);
      }

      if (attempts > attemptsLimit && this.debugMode) {
        console.error('Can not connect to channel, stopped the attempt');
      }
    };

    const setupEventSource = () => {
      alreadyCalled = true;
      this.eventStream = new EventSource(this.PUSHPIN_CHANNEL_NAME);
      this.eventStream.onopen = () => {
        clearTimeout(timeoutFunc);
        attempts = attemptsLimit;

        if (this.debugMode) {
          console.log(
            'connection has been established. listening on the channel...',
          );
        }
      };

      this.eventStream.onerror = () => {
        this.eventStream.close();
        connectFunc();
      };

      this.eventStream.addEventListener('message', (event: { data: any }) => {
        if (this.debugMode) {
          console.log(event.data);
        }

        const parsedEvent = JSON.parse(event.data);
        updateFunction(parsedEvent);
      });
    };

    connectFunc();
  };

  private addNotification = (
    { text, type = PrnNotificationTypes.error, show = true }: Notification,
    timeout = 2000,
  ) => {
    const newId = this.notificationId.value++;
    this.notifications.value.push({
      id: newId,
      text,
      show,
      type,
    });

    setTimeout(
      () =>
        (this.notifications.value = this.notifications.value.filter(
          ({ id }) => id !== newId,
        )),
      timeout,
    );
  };
  /**
   * Notifications store
   */
  useNotificationsStore = () => {
    const notifications = this.notifications;
    const addNotification = this.addNotification;
    /**
    /* @param globalErrorFunction - global ErrorFunction.
     */
    const registerGlobalErrorfunction = (Errorfunction: (err: any) => void) => {
      this.globalErrorFunction = Errorfunction;
    };

    return {
      registerGlobalErrorfunction,
      addNotification,
      notifications,
    };
  };

  /**
   * Set the Debug Mode.
   */
  setDebugMode = (flag = true) => {
    this.resourceGlobal.debugMode = flag; //This is used to printout possible API calls, and internal cache update
    this.debugMode = flag; //This is used to printout possible API calls, and internal cache update

    return flag;
  };

  /**
   * Set the session resource object.
   *  @param resource - resource object.
   */
  private setSessionResources = (
    resource: ResourceObject,
    logInFunction: (args?: any) => void,
    logOutFunction: (args?: any) => void,
    lockFunction: (args?: any) => void,
    unLockFunction: (args?: any) => void,
  ) => {
    this.SessionResource = {
      resource,
      logOutFunction,
      lockFunction,
      logInFunction,
      unLockFunction,
    };
  };

  /**
   * Get the stored session resource object.
   *  @param resource - resource object.
   */
  private getSessionResources = () => {
    if (!this.SessionResource) {
      throw 'You must initialize the session';
    }

    return this.SessionResource;
  };

  /**
   * set app default object.
   *  @param appData - app default object.
   */
  private setAppData(appData: any): void {
    this.appData.value = appData;
  }

  /**
   * update pending for resoruces.
   *  @param resourceName - a unique name for each different resoruce.
   */
  getNumberRequestsPerResource(resourceName?: string): number {
    if (!resourceName && this.lastestResource.value) {
      resourceName = this.lastestResource.value.name;
    }

    if (!this.numberOfPendingRequestsPerResource.value) {
      return 0;
    }

    if (!resourceName) {
      return 0;
    }

    if (!this.numberOfPendingRequestsPerResource.value[resourceName]) {
      return 0;
    }

    if (this.numberOfPendingRequestsPerResource.value[resourceName] < 0) {
      this.numberOfPendingRequestsPerResource.value[resourceName] = 0;

      return 0;
    }

    return this.numberOfPendingRequestsPerResource.value[resourceName];
  }

  /**
   * Initialize pending for resoruces.
   *  @param resource - a unique name for each different resoruce.
   */
  private initPendings(resource: ResourceObject, amount = 0): void {
    const resourceNameTemp: any = resource.name;
    this.numberOfRequestsPerResource.value[resourceNameTemp] = amount;
    this.numberOfPendingRequestsPerResource.value[resourceNameTemp] = amount;
    this.lastestResource.value = resource;
  }

  /**
   * Initialize instance id for resoruces.
   *  @param resource - a unique name for each different resoruce.
   */
  private initInstances(resource: ResourceObject): number {
    const resourceNameTemp: any = resource.name;

    if (!this.numberOfinstancesPerResource[resourceNameTemp]) {
      this.numberOfinstancesPerResource[resourceNameTemp] = 0;
    } else {
      this.numberOfinstancesPerResource[resourceNameTemp] =
        this.numberOfinstancesPerResource[resourceNameTemp] + 1;
    }

    return this.numberOfinstancesPerResource[resourceNameTemp];
  }

  /**
   * update pending for resoruces.
   *  @param resourceName - a unique name for each different resoruce.
   *  @param loading - boolian showing if the resource is pending or not .
   */
  private updatePendings(resourceName: string, loading = true): void {
    if (loading) {
      this.numberOfPendingRequests.value++;
      this.numberOfPendingRequestsPerResource.value[resourceName]++;
      this.numberOfRequestsPerResource.value[resourceName]++;
    } else {
      this.numberOfPendingRequests.value--;
      this.numberOfPendingRequestsPerResource.value[resourceName]--;
    }
  }

  /**
   * Global loading
   * @param resourceName - a unique name for each different resoruce.
   * @param isLoading - loading.
   */
  private setLoadingGlobal(resourceName: any, isLoading: boolean) {
    this.LOADING.value = isLoading;
    this.updatePendings(resourceName, isLoading);
  }

  /**
   * Get last error for specific resources.
   *  @param resourceName - a unique name for each different resoruce.
   */
  getLastErrors(resourceName: string): AxiosError | undefined {
    return this.resourceGlobal.getLastRequestErrors(resourceName);
  }

  /**
   * Match reactive layer caches with data layer caches deep copy of existing object
   */
  private refreshCaches = <T>(
    resource: ResourceObject,
    id?: number | string,
  ) => {
    if (id) {
      const item = this.resourceGlobal.RESOURCE_CACHE.get(resource, id);
      this.GLOBAL_DATA.set(resource.name, item, id);
    } else {
      const list = this.resourceGlobal.RESOURCE_CACHE.getList<ResourceList<T>>(
        resource.name,
      );
      for (const key of list.keys()) {
        const item: any = list.get(key);
        let tempid = item.id;

        if (!tempid) {
          tempid = hid(resource.name);
        }

        this.GLOBAL_DATA.set(resource.name, item, tempid);
      }
    }
  };

  /**
   * Get the data items reactive Cache.
   *  @param eketorpHostName - eketorpHostName.
   *  @param currentOrganizationId - currentOrganizationId.
   *  @param currentUserId - currentUserId.
   */

  setOrganizationDetails = (
    eketorpHostName: string,
    currentOrganizationId: number,
    currentUserId: number,
  ) => {
    this.eketorpHostName.value = eketorpHostName;
    this.currentUserId.value = currentUserId;
    this.currentOrganizatioId.value = currentOrganizationId;
  };

  private getResourceFromEketorpModelName = (
    ModelName: string,
  ): ResourceObject => {
    /* TODO: this potentially needs to be imporved in the backend */
    let relatedResourceName = capitalizeFirstLetter(ModelName);

    if (ModelName.indexOf('.') > -1) {
      const models = ModelName.split('.');
      relatedResourceName = models[models.length - 1] + 'Resource';
      relatedResourceName = capitalizeFirstLetter(relatedResourceName);
    }

    const resources: any = resourceObjects;

    return resources[relatedResourceName];
  };

  private pushPinCondition = (eventChannel: string): boolean => {
    if (
      !this.eketorpHostName ||
      !this.currentOrganizatioId ||
      !this.currentUserId
    ) {
      console.warn('Push pin will not run. Organization details should be set');

      return false;
    }

    const genericChannelName =
      'prorenata-channel' + '-' + this.eketorpHostName.value;
    const organizationChannelName =
      'private-organization-channel-' +
      this.currentOrganizatioId.value +
      '-' +
      this.eketorpHostName.value;
    const userChannelName =
      'private-user-channel-' +
      this.currentUserId.value +
      '-' +
      this.eketorpHostName.value;

    return (
      eventChannel === genericChannelName ||
      eventChannel === organizationChannelName ||
      eventChannel === userChannelName
    );
  };
  /**
   * Match reactive layer caches with newdata by pushpin
   */

  private pushPinGetItem = (parsedEvent: {
    channel: string;
    event: string;
    content: any;
  }) => {
    const resource = this.getResourceFromEketorpModelName(
      parsedEvent.content.model_name,
    );

    const itemId = parsedEvent.content.id;

    const { getItemFromCache, fetchItem, removeItemFromCache } =
      this.useResourceItem(
        resource,
        itemId,
        { force: false, fetchOnDeclare: false },
      );
    const item = getItemFromCache(itemId);

    return { item, fetchItem, removeItemFromCache };
  };
  private pushPinUpdateCache = async (parsedEvent: {
    channel: string;
    event: string;
    content: any;
  }): Promise<boolean> => {
    if (this.pushPinCondition(parsedEvent.channel)) {
      const { addNotification } = this.useNotificationsStore();
      switch (parsedEvent.event) {
      case 'model_create':
        //TODO: possibly need to be removed
        break;

      case 'model_update':
        {
          const { item, fetchItem } = this.pushPinGetItem(parsedEvent);

          if (item && item.id) {
            await fetchItem(true);
          }
        }

        break;

      case 'model_delete':
        {
          const { item, removeItemFromCache } =
              this.pushPinGetItem(parsedEvent);

          if (item && item.id) {
            removeItemFromCache(item.id);
          }
        }

        break;

      case 'module_fetch':
        //TODO: Implentation
        break;

      case 'run_module_function':
        //TODO: Implentation
        break;

      case 'collection_update':
        //TODO: Implentation
        break;

      case 'user_notify':
        addNotification({
          show: true,
          text: '',
          type: PrnNotificationTypes.user_notify,
        });
        break;

      case 'user_notify_quick':
        addNotification({
          show: true,
          text: '',
          type: PrnNotificationTypes.user_notify_quick,
        });
        break;

      case 'user_notify_quick_information':
        addNotification({
          show: true,
          text: '',
          type: PrnNotificationTypes.user_notify_quick_information,
        });
        break;

      case 'session:screen_locked':
        this.SessionResource?.lockFunction();
        break;

      case 'session:screen_unlocked':
        this.SessionResource?.unLockFunction();
        break;

      case 'session:logged_out':
        this.SessionResource?.logOutFunction();
        break;
      }

      return true;
    }

    return false;
  };

  /**
   * Match reactive layer caches with data layer caches deep copy of existing object
   */
  private refreshCachesQuery = <T>(
    resource: ResourceObject,
    resourceParams?: ResourceParams,
  ) => {
    if (resourceParams) {
      const queryhash = hid(resourceParams);
      const queriedObjects = this.resourceGlobal.QUERY_INTERNAL_CACHE.get<
        ResourceList<T>
      >(resource, queryhash);
      this.QUERIED_DATA.set(resource.name, queriedObjects, queryhash);
    }
  };

  /**
   * Get the data items reactive Cache.
   *  @param resource - resource object.
   *  @param id - resource id which could be also null.
   */
  private getItemFromTheReactiveGlobals = (
    resource: ResourceObject,
    id?: number | string,
  ): any => {
    if (!id) {
      if (resource.name) {
        id = hid(resource.name);

        return this.GLOBAL_DATA.get(resource.name, id).value;
      }

      return undefined;
    }

    if (id) {
      return this.GLOBAL_DATA.get(resource.name, id).value;
    }

    return undefined;
  };

  /**
   * Get the data items reactive Cache.
   *  @param resourceParams - arams for the resources which is being hashed
   *  @param id - resource id which could be also null.
   */
  private getQueriedData = (
    resource: ResourceObject,
    resourceParams?: ResourceParams,
  ): any => {
    const queryhash = hid(resourceParams);

    if (this.QUERIED_DATA.get(resource.name, queryhash).value) {
      return this.QUERIED_DATA.get(resource.name, queryhash).value;
    } else {
      return {
        end_index: 0,
        limit: 0,
        next: null,
        objects: [],
        page: 0,
        pages: 0,
        previous: null,
        start_index: 0,
        total: 0,
      };
    }
  };

  /**
   * Get resource item for specific resources.
   *  @param resource - resource object.
   *  @param id - resource id which could be also null.
   *  @param options - resources options object.
   *  @param force - force the datalayer to fetch from api which by default true for lists
   *  @param fetchOnDeclare - fetch item on declaration, which is by defualt true.
   *  @param forceFetchOnNavigation - force fetch if the url changes.
   *  @param forceFetchOnWinBlur - force fetch on windows blur.
   */
  useResourceItem = <R = void>(
    resource: ResourceObject | Ref<ResourceObject>,
    id?: ResourceId,
    options: ResourceOptions = {
      force: false,
      fetchOnDeclare: true,
      forceFetchOnNavigation: false,
      forceFetchOnWinBlur: false,
    },
  ) => {
    const reactiveId = ref<any>(id);
    const resourceRef = ref(resource);

    const resourceStateRef = ref();

    type T = R extends void ? NonNullable<typeof resourceRef.value.type> : R;

    const resourceState = (value: ResourceObject) => {
      const {
        createItem: createItemInternal,
        updateItem: updateItemInternal,
        deleteItem: deleteItemInternal,
        setUrl,
        remoteAction: remoteActionInternal,
        remoteActionGet: remoteActioGetInternal,
        fetchItem: fetchItemInternal,
        getItem,
        removeItemFromDataLayerCache,
      } = this.resourceGlobal.resourceItem<Data<T>>(resourceRef.value, options);
      this.initPendings(resourceRef.value);
      this.initInstances(resourceRef.value);
      resourceStateRef.value = {
        createItemInternal,
        updateItemInternal,
        deleteItemInternal,
        remoteActionInternal,
        remoteActioGetInternal,
        fetchItemInternal,
        getItem,
        removeItemFromDataLayerCache,
        setUrl,
      };
    };

    const idRef = ref();

    const error = ref();
    const locationurl = ref();
    const numberOfPendingRequests = ref(0);
    const isLoading = computed(() => numberOfPendingRequests.value > 0);
    const data = computed(() => {
      const internalId = idRef.value;

      // fetch the data from the cache by internalId
      return this.getItemFromTheReactiveGlobals(resourceRef.value, internalId);
    });
    const mounted = ref(false);

    //fetch on win blur
    if (options.forceFetchOnWinBlur && mounted.value) {
      window.addEventListener('blur', function () {
        fetchItem(true);
      });
    }

    //fetch on win blur
    if (options.forceFetchOnNavigation && mounted.value) {
      window.addEventListener('locationchange', function () {
        if (options.forceFetchOnNavigation && locationurl.value === location.href) {
          fetchItem(true);
        }
      });
    }

    /**
     *  fetchItem which retrieves the item with the stored id
     *  @param  force - force the datalayer to fetch from api
     *  @param  resourceParams - parameters to fetch by { ordering?, filters?, page?: number; limit? }
     *  @param  relatedResources - associated resources to be fetch at the same time. ["currentUser","orgnization.classes.classname"]
     *  @param  axiosArgs - associated AxiosRequestConfig.
     *  @param options - options: {successMessage}
     */
    let lockFetch = false;

    const fetchItem = async (
      force?: boolean,
      axiosArgs?: AxiosRequestConfig<any>,
      options?: { successMessage?: string },
    ) => {
      if (!lockFetch) {
        lockFetch = true;

        if (typeof force === 'undefined') {
          force = false;
        }

        try {
          const internalId = idRef.value;
          resourceStateRef.value.setUrl(internalId);

          if (!internalId) {
            return;
          }

          numberOfPendingRequests.value++;
          this.setLoadingGlobal(resourceStateRef.value.name, true);
          await resourceStateRef.value.fetchItemInternal(
            force,
            undefined,
            axiosArgs,
          );
          error.value = this.getLastErrors(resourceStateRef.value.name);

          if (!this.silentNotification) {
            this.addNotification({
              show: true,
              text:
                (options && options.successMessage) ||
                'Item fetched successfully',
              type: PrnNotificationTypes.success,
            });
          }

          this.setLoadingGlobal(resourceRef.value.name, false);

          /* notice that the reative caches are refreshed*/
          this.refreshCaches(resourceRef.value, internalId);
          mounted.value = true;

          return resourceStateRef.value.getItem(resource, internalId);
        } catch (e) {
          error.value = e;
        } finally {
          numberOfPendingRequests.value--;
          lockFetch = false;
        }
      }
    };

    /**
     *  deleteItem which delete the  item
     *  @param options - options: {successMessage}
     */
    const deleteItem = async (options?: { successMessage?: string }) => {
      try {
        const internalId = idRef.value;
        resourceStateRef.value.setUrl(internalId);

        if (!internalId) {
          return;
        }

        numberOfPendingRequests.value++;
        this.setLoadingGlobal(resourceRef.value.name, true);
        await resourceStateRef.value.deleteItemInternal();
        error.value = this.getLastErrors(resourceRef.value.name);

        this.setLoadingGlobal(resourceRef.value.name, false);

        if (!this.silentNotification) {
          this.addNotification({
            show: true,
            text:
              (options && options.successMessage) ||
              'Item deleted successfully',
            type: PrnNotificationTypes.success,
          });
        }

        /* notice that the reative caches are refreshed*/
        this.refreshCaches(resourceRef.value, internalId);

        mounted.value = true;

        return true;
      } catch (e) {
        error.value = e;
      } finally {
        numberOfPendingRequests.value--;
      }
    };

    /**
     *  remoteAction which does the remote Action ( Notice that you might need to change the base url to one of related resources)
     *  @param action - action
     *  @param data - possible data to pass to remote action
     *  @param options - options: {remoteActionId, fetchOnDone, successMessage}
     */
    const remoteAction = async (
      action: string,
      data?: any,
      options: {
        remoteActionId: string;
        successMessage?: string;
        fetchOnDone: boolean;
      } = {
        remoteActionId: '',
        fetchOnDone: true,
      },
    ) => {
      try {
        const internalId: any = unref(options?.remoteActionId || idRef.value);
        resourceStateRef.value.setUrl(internalId);

        if (!internalId) {
          return;
        }

        numberOfPendingRequests.value++;
        this.setLoadingGlobal(resourceRef.value.name, true);
        await resourceStateRef.value.remoteActionInternal(action, data);
        error.value = this.getLastErrors(resourceRef.value.name);

        if (options && options.fetchOnDone) {
          fetchItem();
        }

        if (!this.silentNotification) {
          this.addNotification({
            show: true,
            text:
              (options && options.successMessage) ||
              'Remote action done successfully',
            type: PrnNotificationTypes.success,
          });
        }

        this.setLoadingGlobal(resourceRef.value.name, false);

        /* notice that the reative caches are refreshed*/
        this.refreshCaches(resourceRef.value, internalId);
        mounted.value = true;

        return resourceStateRef.value.getItem(resource, internalId);
      } catch (e) {
        error.value = e;
      } finally {
        numberOfPendingRequests.value--;
      }
    };

    /**
     *  remoteActionGet which does the remote Action ( Notice that you might need to change the base url to one of related resources)
     *  @param action - action
     *  @param data - possible data to pass to remote action
     *  @param options - options: {remoteActionId, fetchOnDone, successMessage}
     */
    const remoteActionGet = async (
      action: string,
      data?: any,
      options: {
        remoteActionId: string;
        successMessage?: string;
        fetchOnDone: boolean;
      } = {
        remoteActionId: '',
        fetchOnDone: true,
      },
    ) => {
      try {
        const internalId: any = unref(options?.remoteActionId || idRef.value);
        resourceStateRef.value.setUrl(internalId);

        if (!internalId) {
          return;
        }

        numberOfPendingRequests.value++;
        this.setLoadingGlobal(resourceRef.value.name, true);
        const result = await resourceStateRef.value.remoteActioGetInternal(
          action,
          data,
        );
        error.value = this.getLastErrors(resourceRef.value.name);

        if (options && options.fetchOnDone) {
          fetchItem();
        }

        if (!this.silentNotification) {
          this.addNotification({
            show: true,
            text:
              (options && options.successMessage) ||
              'Remote action fetched successfully',
            type: PrnNotificationTypes.success,
          });
        }

        this.setLoadingGlobal(resourceRef.value.name, false);

        /* notice that the reative caches are refreshed*/
        this.refreshCaches(resourceRef.value, internalId);
        mounted.value = true;

        return result;
      } catch (e) {
        error.value = e;
      } finally {
        numberOfPendingRequests.value--;
      }
    };

    /**
     *  save which update or create Item the item with the stored id
     *  @param  newData - newData
     *  @param options - options: {successMessage}
     */
    const saveItem = async (
      newData: T,
      options?: { successMessage?: string },
    ) => {
      const internalId = idRef.value;
      resourceStateRef.value.setUrl(internalId);

      // if id not defined we create otherwise try to update
      if (!internalId) {
        try {
          this.setLoadingGlobal(resourceRef.value.name, true);
          numberOfPendingRequests.value++;
          const data = await resourceStateRef.value.createItemInternal(newData);
          error.value = this.getLastErrors(resourceRef.value.name);

          this.setLoadingGlobal(resourceRef.value.name, false);

          if (!this.silentNotification) {
            this.addNotification({
              show: true,
              text:
                (options && options.successMessage) ||
                'Item created successfully',
              type: PrnNotificationTypes.success,
            });
          }

          /* notice that the reative caches are refreshed*/
          this.refreshCaches(resourceRef.value, data.id);

          mounted.value = true;
          idRef.value = data.id;

          return resourceStateRef.value.getItem(resource, data.id);
        } catch (e) {
          error.value = e;
        } finally {
          numberOfPendingRequests.value--;
        }
      } else {
        try {
          numberOfPendingRequests.value++;
          this.setLoadingGlobal(resourceRef.value.name, true);
          await resourceStateRef.value.updateItemInternal(newData);
          error.value = this.getLastErrors(resourceRef.value.name);

          this.setLoadingGlobal(resourceRef.value.name, false);

          if (!this.silentNotification) {
            this.addNotification({
              show: true,
              text:
                (options && options.successMessage) ||
                'Item updated successfully',
              type: PrnNotificationTypes.success,
            });
          }

          /* notice that the reative caches are refreshed*/
          this.refreshCaches(resourceRef.value, internalId);
          mounted.value = true;

          return true;
        } catch (e) {
          error.value = e;
        } finally {
          numberOfPendingRequests.value--;
        }
      }
    };

    const getItemReactive = () => {
      if (options.fetchOnDeclare && !mounted.value) {
        fetchItem(options.force);
      }

      if (options.forceFetchOnNavigation && mounted.value) {
        fetchItem(true);

        locationurl.value = location.href;
      }

      if (mounted.value) {
        fetchItem(options.force);
      }
    };

    watch(
      reactiveId,
      () => {
        idRef.value = reactiveId.value;
        getItemReactive();
      },
      { immediate: true },
    );

    //fetch on changing the resources
    watch(
      resourceRef,
      (newVal, oldValue) => {
        if (newVal !== oldValue) {
          resourceState(resourceRef.value);
          getItemReactive();
        }
      },
      { immediate: true },
    );

    const getItemFromCache = (itemId?: string | number | undefined): T => {
      return resourceStateRef.value.getItem(resource, itemId);
    };

    const removeItemFromCache = (
      itemId?: string | number | undefined,
    ): boolean => {
      resourceStateRef.value.removeItemFromDataLayerCache(resource, itemId);
      this.refreshCaches(resourceRef.value, itemId);

      return true;
    };

    return {
      data,
      error,
      isLoading,
      status: getStatus(data, error, isLoading),
      saveItem,
      deleteItem,
      remoteAction,
      remoteActionGet,
      fetchItem,
      getItemFromCache,
      removeItemFromCache,
    } as ResultItemType<T | R>;
  };
  /**
   * Get resource related items for specific resource.
   *  @param resource - resource object.
   *  @param referenceData - reference Data object.
   *  @param relatedResources - associated resources to be fetch at the same time. ["currentUser","orgnization.classes.classname"]
   */
  useRelatedResourceItems = (
    resource: ResourceObject,
    referenceData: ComputedRef<any> | Ref<any>,
    relatedResources: RelatedResources,
  ) => {
    const { fetchItems: internalFetchItems, resourceListNames } =
      this.resourceGlobal.fetchRelatedResources(resource, relatedResources);
    this.initPendings(resource);
    this.initInstances(resource);
    const resourceListNamesRef = ref([]);
    const data = computed(() => {
      const results: any = {};

      if (resourceListNamesRef.value.length > 0) {
        resourceListNamesRef.value.forEach((resourceObj: any) => {
          results[resourceObj.name] = this.getItemFromTheReactiveGlobals(
            resourceObj.resource,
            resourceObj.id,
          );
        });
      }

      return results;
    });

    const error = computed(() => {
      const results: any = {};

      if (resourceListNamesRef.value.length > 0) {
        resourceListNamesRef.value.forEach((resourceObj: any) => {
          results[resourceObj.name] = this.resourceGlobal.getLastErrors(
            resourceObj.resource.name,
          );
        });
      }

      return results;
    });

    const isLoading = ref(false);
    const mounted = ref(false);

    /**
     *  fetchItem which retrieves the item with the stored id
     *  @param  force - force the datalayer to fetch from api
     *  @param  relatedResources - associated resources to be fetch at the same time. ["currentUser","orgnization.classes.classname"]
     *  @param  axiosArgs - associated AxiosRequestConfig.
     *  @param options - options: {successMessage}
     */
    const fetchItem = async (
      force?: boolean,
      options?: { successMessage?: string },
    ) => {
      if (typeof force === 'undefined') {
        force = false;
      }

      try {
        isLoading.value = true;

        if (!referenceData.value) {
          return;
        }

        this.setLoadingGlobal(resource.name, true);
        await internalFetchItems(force, referenceData.value);
        this.setLoadingGlobal(resource.name, false);

        resourceListNamesRef.value = resourceListNames;

        if (!this.silentNotification) {
          this.addNotification({
            show: true,
            text:
              (options && options.successMessage) ||
              'Item fetched successfully',
            type: PrnNotificationTypes.success,
          });
        }

        /* refresh all of related ref */
        resourceListNames.forEach((resourceObj: any) => {
          this.refreshCaches(resourceObj.resource, resourceObj.id);
        });

        isLoading.value = false;
        mounted.value = true;
      } catch (e) {
        return;
      }
    };

    /*Watch referenceData fetch if changed */
    watch(
      referenceData,
      (value, oldValue) => {
        if (value !== oldValue) {
          fetchItem();
        }
      },
      { immediate: true },
    );

    return {
      data,
      error,
      isLoading,
      status: getStatus(data, error, isLoading),
    } as ResultRelatedItemsType;
  };

  /**
   * Registrer the resource object annotations.
   *  @param resource - resource object.
   *  @param annotations - resource annotations.
   */
  setAnnotations = (
    resource: ResourceObject,
    annotations: Annotations<ModelTypes>,
  ) => {


    if (this.debugMode){
      console.log('Resource '+ resource.name +' has been annotated');
      console.table(annotations);
    }

    if (annotations.fields) {
      const lookupField: any = resource.fields;
      const lookupAnnotations: any = annotations.fields;

      const mergedFields = {} as Record<string, unknown>;

      for (const field in resource.fields) {
        // Merging resource fields with resource annotated fields
        // If we added annotated fields, the field properties will be merged, aka updated with annotations,
        // otherwise the resource field is used
        if (lookupAnnotations[field]) {
          mergedFields[field] = {
            ...lookupField[field],
            ...lookupAnnotations[field],
          };
        } else {
          mergedFields[field] = lookupField[field];
        }
      }

      resource.fields = mergedFields;
    }

    if (annotations.actions) {
      resource.actions = annotations.actions;
    }

    if (annotations.display) {
      resource.display = annotations.display;
    }

    if (annotations.meta) {
      resource.meta = annotations.meta;
    }

    if (annotations.filters) {
      resource.filters = annotations.filters;
    }
  };

  /**
   * get annotations fields.
   *  @param resource - resource object.
   */
  getAnnotationFields = (resource: ResourceObject) => {
    return resource.fields;
  };

  /**
   * Get resource item for specific resources.
   *  @param resource - resource object.
   *  @param params - params for the resources.
   *  @param options - resources options object.
   *  @param force - force the datalayer to fetch from api which by default true for lists
   *  @param fetchOnDeclare - fetch item on declaration, which is by defualt true.
   *  @param forceFetchOnNavigation - force fetch if the url changes.
   *  @param forceFetchOnWinBlur - force fetch on windows blur.
   */
  useResourceList = <R = void>(
    resource: ResourceObject | Ref<ResourceObject>,
    params?: Params,
    options: ResourceOptions = {
      force: false,
      fetchOnDeclare: true,
      forceFetchOnNavigation: false,
      forceFetchOnWinBlur: false,
    },
  ) => {
    const resourceRef = ref(resource);
    const resourceStateRef = ref();
    type T = R extends void ? NonNullable<typeof resourceRef.value.type> : R;

    const resourceState = (value: ResourceObject) => {
      const { fetchList } = this.resourceGlobal.resourceList<T>(value, options);
      this.initPendings(resourceRef.value);
      this.initInstances(resourceRef.value);
      resourceStateRef.value = { fetchList };
    };

    if (!params) {
      params = {};
    }

    const reactiveParams = reactive(params);
    const paramsRef = ref<Params>({});

    const error = ref();
    const locationurl = ref();
    const numberOfPendingRequests = ref(0);
    const isLoading = computed(() => numberOfPendingRequests.value > 0);

    const data = computed(() => {
      if (resourceRef.value) {
        const { objects, ...metadata } = this.getQueriedData(
          resourceRef.value,
          paramsRef.value,
        );
        const objectIds: (string | number)[] = [];
        objects &&
          objects.forEach((item: any) => {
            if ('id' in item) {
              if (item.id) {
                return objectIds.push(item.id);
              }
            }
          });

        const items = objects
          ? objects
            .map((object: any) => {
              return this.getItemFromTheReactiveGlobals(
                resourceRef.value,
                object.id,
              );
            })
            .filter((object: any) => {
              return object && typeof object !== 'undefined';
            })
          : [];

        const meta = metadata;

        return { items, meta, objectIds };
      }

      return { items: null, meta: null, objectIds: [] };
    });

    const items = computed(() => data.value.items);
    const meta = computed(() => data.value.meta);
    const ids = computed(() => data.value.objectIds);
    const mounted = ref(false);

    let lockFetch = false;

    /**
     *  fetchItems which retrieves the items with the stored resource params\
     *  @param  force - force the datalayer to fetch from api
     *  @param  resourceParams - parameters to fetch by { ordering?, filters?, page?: number; limit? }
     *  @param  axiosArgs - associated AxiosRequestConfig.
     *  @param options - options: {successMessage}
     */
    const fetchItems = async (
      force?: boolean,
      resourceParams?: Params,
      axiosArgs?: AxiosRequestConfig<any>,
      options?: { successMessage?: string },
    ) => {
      if (typeof force === 'undefined') {
        force = false;
      }

      if (!lockFetch) {
        lockFetch = true;
        try {
          numberOfPendingRequests.value++;
          this.setLoadingGlobal(resourceRef.value.name, true);

          if (resourceParams) {
            paramsRef.value = {
              filters: unref(resourceParams.filters),
              ordering: unref(resourceParams.ordering),
              page: unref(resourceParams.page),
              limit: unref(resourceParams.limit),
            };
          } else {
            paramsRef.value = {
              filters: unref(reactiveParams.filters),
              ordering: unref(reactiveParams.ordering),
              page: unref(reactiveParams.page),
              limit: unref(reactiveParams.limit),
            };
          }

          await resourceStateRef.value.fetchList(
            force,
            paramsRef.value,
            axiosArgs,
          );
          error.value = this.getLastErrors(resourceRef.value.name);
          this.setLoadingGlobal(resourceRef.value.name, false);

          if (!this.silentNotification) {
            this.addNotification({
              show: true,
              text:
                (options && options.successMessage) ||
                'Items fetched successfully',
              type: PrnNotificationTypes.success,
            });
          }

          /* notice that the reative caches are refreshed*/
          this.refreshCaches(resourceRef.value);
          this.refreshCachesQuery(resourceRef.value, paramsRef.value);
          mounted.value = true;
        } catch (e) {
          error.value = e;
        } finally {
          numberOfPendingRequests.value--;
          lockFetch = false;
        }
      }
    };

    //fetch on win blur
    if (options.forceFetchOnNavigation && mounted.value) {
      window.addEventListener('locationchange', function () {
        if (options.forceFetchOnNavigation && locationurl.value === location.href) {
          fetchItems(true);
        }
      });
    }

    //fetch on win blur
    if (options.forceFetchOnWinBlur && mounted.value) {
      window.addEventListener('blur', function () {
        fetchItems(true);
      });
    }

    const getItemsReactive = () => {
      if (options.forceFetchOnNavigation  && mounted.value) {
        // on change params always fetch if forceFetchOnNavigation
        fetchItems(true);
        //update the location
        locationurl.value = location.href;
      }

      if (options.fetchOnDeclare && !mounted.value) {
        fetchItems(options.force, reactiveParams);
      }

      if (mounted.value) {
        fetchItems(options.force, reactiveParams);
      }
    };

    //fetch on changing the params
    watch(
      reactiveParams,
      () => {
        getItemsReactive();
      },
      { immediate: true },
    );
    //fetch on changing the resources
    watch(
      resourceRef,
      (newVal, oldValue) => {
        if (newVal !== oldValue) {
          resourceState(resourceRef.value);
          getItemsReactive();
        }
      },
      { immediate: true },
    );

    return {
      items,
      ids,
      meta,
      error,
      status: getStatus(items, error, isLoading),
      isLoading,
      fetchItems,
    } as ResultListType<T | R>;
  };

  /**
   * Get resource item for specific file.
   *  @param resource - resource object.
   *  @param id - resource id which could be also null.
   */
  useResourceFiles = <R = void>(resource: ResourceObject) => {
    type T = R extends void ? NonNullable<typeof resource.type> : R;
    const { postFile: uploadFile } =
      this.resourceGlobal.resourceItem<T>(resource);
    this.initPendings(resource);
    this.initInstances(resource);
    const error = ref();
    const isLoading = computed(() => {
      return this.getNumberRequestsPerResource(resource.name) > 0;
    });

    const data = ref<any>();
    const mounted = ref(false);

    const postFile = async (
      data: any,
      options?: { successMessage?: string },
    ) => {
      try {
        this.setLoadingGlobal(resource.name, true);
        await uploadFile(data);
        error.value = this.getLastErrors(resource.name);
        this.setLoadingGlobal(resource.name, false);
        /* notice that the reative caches are refreshed*/
        data.value = data;

        if (!this.silentNotification) {
          this.addNotification({
            show: true,
            text:
              (options && options.successMessage) ||
              'Items uploaded successfully',
            type: PrnNotificationTypes.success,
          });
        }

        this.refreshCaches(resource);
        mounted.value = true;
      } catch (e) {
        error.value = e;
      }
    };

    return {
      data,
      error,
      isLoading,
      status: getStatus(data, error, isLoading),
      postFile,
    } as ResultFileType<T | R>;
  };

  /**
   * Get resource session.
   */
  useSession = <R = void>() => {
    const resource = this.getSessionResources().resource;
    type T = R extends void ? NonNullable<typeof resource.type> : R;
    const { fetchItem: fetchItemInternal } = this.resourceGlobal.resourceItem<
      Data<T>
    >(resource, undefined);
    this.initPendings(resource);
    this.initInstances(resource);
    const data = computed(() => this.getItemFromTheReactiveGlobals(resource));

    const error = ref();
    const numberOfPendingRequests = ref(0);
    const isLoading = computed(() => numberOfPendingRequests.value > 0);

    const mounted = ref(false);
    /**
     *  getItem which retrieves the item with the stored id
     *  @param  force - force the datalayer to fetch from api
     *  @param options - options: {successMessage}
     */
    const fetchItem = async (
      force?: boolean,
      options?: { successMessage?: string },
    ) => {
      if (typeof force === 'undefined') {
        force = false;
      }

      try {
        this.setLoadingGlobal(resource.name, true);
        numberOfPendingRequests.value++;
        await fetchItemInternal(force);

        if (!this.silentNotification) {
          this.addNotification({
            show: true,
            text:
              (options && options.successMessage) ||
              'Session fetched successfully',
            type: PrnNotificationTypes.success,
          });
        }

        this.refreshCaches(resource);
        this.setLoadingGlobal(resource.name, false);

        /* notice that the reative caches are refreshed*/
        mounted.value = true;
      } catch (e) {
        error.value = e;
      } finally {
        numberOfPendingRequests.value--;
      }
    };

    return {
      data,
      appData: this.appData,
      logout: this.SessionResource?.logOutFunction,
      login: this.SessionResource?.logInFunction,
      error,
      status: getStatus(data, error, isLoading),
      isLoading,
      fetchItem,
    } as ResultSessionType<T | R>;
  };

  /**
   * Get Theme dictionary.
   */
  useTheme = () => {
    const changeState = (key: any, value: any) => {
      this.THEME_DATA.value.theme[key] = value;
    };

    return {
      theme: this.THEME_DATA,
      changeState,
    };
  };

  /**
   * Get resource keepAlive.
   *  @param resource - resource object.
   *  @param events - events that determines user is not idle, default = ["mousedown", "keydown", "scroll", "touchstart"].
   *  @param ildeFalseOnDeclare - pass ilde false on declaration, which is by defualt true.
   *  @param container - container that events are associated with.
   *  @param TIMEINTERVAL - TIMEINTERVAL that idle is being sent in accordance with .
   */
  initKeepAlive = <R = void>(
    resource?: ResourceObject,
    events?: KeepAliveEvents,
    ildeFalseOnDeclare?: boolean,
    container?: Document,
    TIMEINTERVAL?: number,
  ): void => {
    if (!events) {
      events = [ 'mousedown', 'keydown', 'scroll', 'touchstart' ];
    }

    if (typeof ildeFalseOnDeclare === 'undefined') {
      ildeFalseOnDeclare = true;
    }

    if (!container) {
      container = document;
    }

    if (!TIMEINTERVAL) {
      TIMEINTERVAL = 15000;
    }

    if (!resource) {
      resource = resourceObjects.base_keepalive_Resource;
    }

    type T = R extends void ? NonNullable<typeof resource.type> : R;
    const SessionResource = this.getSessionResources();
    this.initPendings(resource);
    this.initInstances(resource);
    const { fetchItem, getItem } =
      this.resourceGlobal.resourceItem<T>(resource);

    let isUserIdle = true;
    let logoutInterval = 0;

    const startTimer = () => {
      if (logoutInterval) {
        clearInterval(logoutInterval);
      }

      logoutInterval = window.setInterval(
        () => sendKeepAlive(isUserIdle),
        TIMEINTERVAL,
      );
    };

    /* Register resource error behaviour */
    resource.errors = {
      error403: () => {
        SessionResource.logInFunction();
      },
      error401: () => {
        SessionResource.logInFunction();
      },
    };

    /* This function will be reduntant, if we handle the error functions 401 403 by logout */
    const checkLoggedOut = (data: KeepAliveType) => {
      // lockFunction if the session locked
      if (data.screen_locked_date_time) {
        SessionResource.lockFunction();
      }
    };

    // logOutFunction if the session was expired
    const sendKeepAlive = (idle = false) => {
      fetchItem(true, {
        filters: {
          idle: idle,
        },
      })
        .then(() => {
          if (!resource) {
            resource = resourceObjects.base_keepalive_Resource;
          }

          // since we force the fetch we always have the latest date
          const dataInternal: any = getItem(resource);
          checkLoggedOut(dataInternal);
          isUserIdle = true;
          startTimer();
        })
        .catch(() => SessionResource.logInFunction());
    };

    if (ildeFalseOnDeclare) {
      sendKeepAlive(isUserIdle);
    }

    const setIsUserIdleFalse = () => {
      isUserIdle = false;
    };

    const throttledFn = throttle(setIsUserIdleFalse, 1000);

    events.forEach((e) => {
      if (container) {
        container.addEventListener(e, throttledFn);
      }
    });
  };

  /**
   * Get resource session.
   *  @param resource - resource object.
   *  @param logOutFunctionDefault - logOut Function which is called on the empty session.
   *  @param logInFunctionDefault - login Function which is called on the error403 and error401 (one could over ride these functions as well).
   *  @param lockFunction - luck Function which is called on the session lock.
   *  @param unLockFunction - unluck Function which is called on the session unlock.
   *  @param options - resources options object.
   *  @param resourceKeepAlive - resourceKeepAlive object.
   */
  initSession = <R = void>(
    resource?: ResourceObject,
    logOutFunctionDefault?: () => void,
    logInFunctionDefault?: () => void,
    lockFunction?: () => void,
    unLockFunction?: () => void,
    options?: ResourceOptions | false,
  ) => {
    if (!resource) {
      resource = resourceObjects.SessionInfoResource;
    }

    /* Register SessionResources */
    this.initPendings(resource);
    this.initInstances(resource);

    const logInFunction = () => {
      if (logInFunctionDefault) {
        return logInFunctionDefault();
      }

      //otherwise Default behavior
      const location = window.location;
      location.assign(location.origin + '/login?next=' + location.pathname);
    };

    const logOutFunction = () => {
      if (logOutFunctionDefault) {
        return logOutFunctionDefault();
      }

      //otherwise Default behavior
      const location = window.location;
      location.assign(location.origin + '/logout?next=' + location.pathname);
    };

    if (!lockFunction) {
      lockFunction = logOutFunction;
    }

    if (!unLockFunction) {
      unLockFunction = logInFunction;
    }

    type T = R extends void ? NonNullable<typeof resource.type> : R;

    /* Register resource error behaviour */
    resource.errors = {
      error403: () => {
        logInFunction();
      },
      error401: () => {
        logInFunction();
      },
    };

    const { fetchItem: fetchItemInternal } = this.resourceGlobal.resourceItem<
      Data<T>
    >(resource, options);

    const data = computed(() => {
      if (!resource) {
        resource = resourceObjects.SessionInfoResource;
      }

      return this.getItemFromTheReactiveGlobals(resource);
    });

    const error = ref();
    const numberOfPendingRequests = ref(0);
    const isLoading = computed(() => numberOfPendingRequests.value > 0);
    const mounted = ref(false);

    /* TODO: remove this and this logic to the session it self from backend */
    if ('user_id' in resource.fields && 'organization_id' in resource.fields) {
      const organizationId = computed(() => {
        if (data.value) {
          return data.value.organization_id;
        }

        return null;
      });

      const useId = computed(() => {
        if (data.value) {
          return data.value.user_id;
        }

        return null;
      });

      const { data: organization, isLoading: isLoadinOrg } =
        this.useResourceItem(
          resourceObjects.OrganizationResource,
          organizationId,
        );
      const { data: user, isLoading: isLoadinUsr } = this.useResourceItem(
        resourceObjects.UserResource,
        useId,
      );

      watch(isLoadinOrg, (newVal, oldValue) => {
        if (newVal && newVal !== oldValue) {
          this.setAppData({
            ...this.appData,
            organization: organization.value,
          });
        }
      });
      watch(isLoadinUsr, (newVal, oldValue) => {
        if (newVal && newVal !== oldValue) {
          this.setAppData({ ...this.appData, user: user.value });
        }
      });
    }

    this.setSessionResources(
      resource,
      logInFunction,
      logOutFunction,
      lockFunction,
      unLockFunction,
    );

    let lock = false;
    /**
     *  getItem which retrieves the item with the stored data
     *  @param  force - force the datalayer to fetch from api
     *  @param  axiosArgs - associated AxiosRequestConfig.
     *  @param  options - options: {successMessage}
     */
    const fetchItem = async (
      force?: boolean,
      axiosArgs?: AxiosRequestConfig<any>,
      options?: { successMessage?: string },
    ) => {
      if (!lock) {
        lock = true;

        if (typeof force === 'undefined') {
          force = false;
        }

        if (!resource) {
          resource = resourceObjects.SessionInfoResource;
        }

        try {
          this.setLoadingGlobal(resource.name, true);
          numberOfPendingRequests.value++;
          await fetchItemInternal(force, undefined, axiosArgs);

          this.setLoadingGlobal(resource.name, false);

          if (!this.silentNotification) {
            this.addNotification({
              show: true,
              text:
                (options && options.successMessage) ||
                'Session fetched successfully',
              type: PrnNotificationTypes.success,
            });
          }

          /* notice that the reative caches are refreshed*/
          this.refreshCaches(resource);

          const sessionData = this.getItemFromTheReactiveGlobals(resource);
          this.setOrganizationDetails(
            sessionData.host_name,
            sessionData.user_id,
            sessionData.organization_id,
          );
          mounted.value = true;
        } catch (e) {
          error.value = e;
        } finally {
          numberOfPendingRequests.value--;
        }

        lock = false;
      }
    };

    fetchItem();

    return {
      data,
      error,
      status: getStatus(data, error, isLoading),
      isLoading,
    } as ResultSessionType<T | R>;
  };
}

export default ResourceManager;