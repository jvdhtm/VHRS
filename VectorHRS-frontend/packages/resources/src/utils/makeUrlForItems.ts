import { ResourceObject, ResourceOptions } from "../types";

export function makeUrlForItems(
    resource: ResourceObject,
    options?: ResourceOptions | false,
  ) {

    let url = resource.baseUrl 
    /*This is used for some specific ones like res1/{id}/res2/{id2} */
    if (options && options.url && options.params) {
      options.params.forEach((param: { name: any; value: string }) => {
        url = url.replace(`{${param.name}}`, param.value);
      });
    }

    return url ;
}