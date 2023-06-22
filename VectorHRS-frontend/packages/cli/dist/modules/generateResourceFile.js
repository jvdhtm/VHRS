"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResourceFile = void 0;
/**
 * Get resource Item for specific resources.
 *  @param element - fields associated with model in swagger docs.
 *  @param model - model name.
 *  @param choosenPath - base url.
 *  @param relatedPath - related urls.
 *  @param fileName - file name.
 */
function generateResourceFile(resource, model, choosenPath, relatedPath, fileName) {
    let file = "";
    let definitionsTowrite = "any";
    let name = `${fileName}Resource`;
    file = "";
    if (model) {
        file += ` import type { Models, ResourceObject } from "../../types";
      `;
        name = `${model}Resource`;
        definitionsTowrite = `Models["${model}"]`;
    }
    else {
        file += `import type { ResourceObject } from "../../types";`;
    }
    file += `
    const mockType = (): ${definitionsTowrite} | undefined => {
      return;
    };
    `;
    file += `
    export const ${fileName}Resource:ResourceObject = {
      baseUrl: "${choosenPath}",
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
exports.generateResourceFile = generateResourceFile;
//# sourceMappingURL=generateResourceFile.js.map