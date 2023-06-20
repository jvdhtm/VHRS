/**
 * Get resource item for specific resources.
 * @param resource - Empty by default and passed as reference.
 * @param pathVerbs - List of verbs associated with the path in Swagger docs.
 * @param modelDefinitions - Empty by default and passed as reference.
 * @param fileName - Intial File name.
 * @returns An object containing the resource, file name, and resource definition.
 */
export function findResourceModel(
  resource: any,
  pathVerbs: any,
  modelDefinitions: any,
  fileName:string,
) {
  let resourceDefinition;
  for (const verb in pathVerbs) {
    const parameters = pathVerbs[verb].parameters;
    const responses = pathVerbs[verb].responses;

    let modelFound = false;
    if (parameters && parameters.length > 0) {
      if (parameters[0].in === "body") {
        resourceDefinition = parameters[0].schema.$ref.replace("#/definitions/", "");
      }
      if (resourceDefinition) {
        modelFound = true;
      }
    }

    if (!modelFound) {
      for (const response in responses) {
        if (Object.prototype.hasOwnProperty.call(responses, response)) {
          const schema = responses[response].schema;
          if (schema) {
            if (schema.type == "array") {
              resourceDefinition = schema.items.$ref.replace("#/definitions/", "");
            } else {
              resourceDefinition = schema.$ref.replace("#/definitions/", "");
            }
          }
        }
      }
    }
    if (resourceDefinition) {
      resource = modelDefinitions[resourceDefinition];
      fileName = resourceDefinition;
    }
  }

  return {
    resource,
    fileName,
    resourceDefinition,
  };
}
