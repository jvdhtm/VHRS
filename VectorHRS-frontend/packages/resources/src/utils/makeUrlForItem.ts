import { ResourceObject, ResourceOptions } from "../types";

export function makeUrlForItem(
    itemId: number | string | undefined,
    resource: ResourceObject,
    options?: ResourceOptions | false,
  ) {
    if (!itemId) { return resource.baseUrl }

    let url = resource.baseUrl + itemId ;

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