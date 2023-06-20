
/**
 * Get resource Item for specific resources.
 *  @param element - fields associated with model in swagger docs.
 *  @param model - model name.
 *  @param choosenPath - base url.
 *  @param relatedPath - related urls.
 *  @param fileName - file name.
 */
export function generateResourceFile(
    resource: any,
    model: string,
    choosenPath: string,
    relatedPath: string[],
    fileName: string
  ): string {
    let file = "";
    let definitionsTowrite = "any";
    let name = `${fileName}Resource`;
    file = "";
    if (model) {
      file += ` import type { Models, RequestType } from "@prorenata/models"`;
      name = `${model}Resource`;
      definitionsTowrite = `Models["${model}"]`;
    } else {
      file += ` import type { RequestType } from "@prorenata/models"`;
    }
  
    file += `
    const mockType = (): ${definitionsTowrite} | undefined => {
      return;
    };
    `;
  
    file += `
    export const ${fileName}Resource:RequestType = {
      url: "${choosenPath}",
      relatedurls: ${JSON.stringify(relatedPath)},
      name: "${name}",
      type: mockType,
      fields: ${JSON.stringify(resource.properties)}, 
      `;
    if (resource.required) {
      file += `
      required: ${JSON.stringify(resource.required)} ,`;
    }
    file += `
    }`;
    return file;
  }