import { dataLayerObj, RequestType } from "../connect";
import {
  ActionPropType,
  AnnotatedResourceFields,
  Display,
  EndPointType,
  ErrorFunctions,
  ModelTypes,
  ResourceFields,
  ResourceMetaType,
  ResourceObjectOptions,
  ResourceOptions,
} from "../types";

import {useState} from "react";

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  results: any[];
}

const initialState: Istate = {
  count: 0,
  results: [],
};

export class ResourceObject {

   baseUrl: string;
   fields: ResourceFields | AnnotatedResourceFields<ModelTypes>;
   name: string;
   relatedurls?: EndPointType[] | string[];
   type?: ModelTypes | any;
   errors?: ErrorFunctions;
   required?: string[];
   unannotated?: ResourceFields;
   actions?: ActionPropType[];
   baseFilter?: any;
   display?: Display;
   meta?: ResourceMetaType;
   bootstrap?: boolean;
   data: any;
   setData: React.Dispatch<React.SetStateAction<Istate>>;
  constructor(options:ResourceObjectOptions) {
    this.baseUrl = options.baseUrl;
    this.fields = options.fields;
    this.name = options.name;
    this.relatedurls = options.relatedurls;
    this.type = options.type;
    this.errors = options.errors;
    this.required = options.required;
    this.actions = options.actions;
    this.baseFilter = options.baseFilter;
    this.display = options.display;
    this.meta = options.meta;
    this.bootstrap = options.bootstrap;
    const [data , setData] = useState<Istate> (initialState);
    this.data = data;
    this.setData = setData;
    if( this.bootstrap){
      this.fetch();
    }
  }

  private makeUrlForItem(
      itemId: number | string | undefined,
      options?: ResourceOptions | false,
    ) {
      if (!itemId) { return this.baseUrl }

      let url = this.baseUrl + itemId ;

      if (options && options.url) {
        url = options.url + itemId;
      }

      /*This is used for some specific ones like res1/{id}/res2/{id2} */
      if (options && options.url && options.params) {
        options.params.forEach((param: { name: any; value: string }) => {
          url = url.replace(`{${param.name}}`, param.value);
        });
      }

      return url ;
  }


  private setCache(itemId?:number, data:Istate){

    let found = false;
    let newCount = this.data.count + data.count;
    let newNext = data.next;
    let newPrevious = data.previous;
    let prevStateResults = this.data.results;


    let newResult = prevStateResults.map(
      (el: any) => {
        const preEl = prevStateResults.filter(
          (resultEl: any) => {
            return el.id === resultEl.id;
          }
        );

        if (preEl.length > 0) {
          found = true;
          return { ...el, ...preEl[0] };
        } else {
          return el;
        }
      }
    );

    if (!found) {
      newResult = prevStateResults.concat(data.results);
    }

    const newResultSerializedById: any[] = [];
    newResult.map((el: any) => {
      if (el.id) {
        newResultSerializedById[el.id] = el;
      }
    });

    this.setData({
      count: newCount,
      next: newNext,
      previous: newPrevious,
      results: newResultSerializedById,
    });

  }

  async fetch(itemId?:number, options?: ResourceOptions): Promise<any> {
          try {
            const endpoint = this.makeUrlForItem(itemId, options);

            const request: RequestType = {
              endpoint,
              name: this.name,
              verb: "get",
              forceNoDedup: options?.forceNoDedup
            };
            const result = await dataLayerObj.requestApi(request);



          }
          catch (e) {
              return e;
          }
  }

  async save(data?:any, options?: ResourceOptions): Promise<any> {
          try {

            const endpoint = this.makeUrlForItem(data.id, options);
            if(data.id){
              //update
              const request: RequestType = {
                endpoint,
                name: this.name,
                verb: "put",
                data
              };
              return dataLayerObj.requestApi(request);

            }
            else{
              //create
              const request: RequestType = {
                endpoint,
                name: this.name,
                verb: "post",
                data
              };
              return dataLayerObj.requestApi(request);

            }
          }
          catch (e) {


          }
  }


}
