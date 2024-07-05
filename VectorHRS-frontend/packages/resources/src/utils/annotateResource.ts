import * as resources from "../servers/resources/index";
import {
  ResourceObject,
  Annotations,
  ResourceKeys,
  AnnotatedResourceFields,
  Display,
  ResourceContext,
} from "../types"; // Adjust imports as per your project structure

export const annotateResource = (
  resourceKey: ResourceKeys,
  annotations: Annotations<any>
): ResourceObject => {
  // Ensure resourceKey is a valid key for resources
  if (!(resourceKey in resources)) {
    throw new Error(`Resource key '${resourceKey}' not found in resources.`);
  }

  // Retrieve the existing resource
  const resource = resources[resourceKey] as ResourceObject;

  // Mutate the existing resource directly with the new annotations
  if (annotations.fields) {
    const existingFields = resource.fields as AnnotatedResourceFields<any>; // Adjust type as per your project
    for (const fieldName in annotations.fields) {
      if (Object.prototype.hasOwnProperty.call(annotations.fields, fieldName)) {
        const field = annotations.fields[fieldName];
        if (field?.display) {
          const { components, ctx, admissions } = field.display;

          // Update components if provided
          const componentsWithContext: any = {};
          if (components) {
            for (const methodName in components) {
              if (Object.prototype.hasOwnProperty.call(components, methodName)) {
                const method: Function = components[methodName as keyof Display["components"]];
                if (method) {
                  componentsWithContext[methodName as keyof Display["components"]] = (data: any, context: ResourceContext | undefined) => {
                    if (context) return method(data, context);
                    else return method(data, { resource, props: {} });
                  };
                }
              }
            }
          }

          if( existingFields[fieldName]){
            existingFields[fieldName].display = {
              ...existingFields[fieldName].display,
              components: {
                ...componentsWithContext
              },
              ctx: ctx || { resource, props: {} },
              admissions: admissions,
            };
          }
        }
      }
    }
  }

  if (annotations.display) {
    const { components, ctx, admissions } = annotations.display;

    // Update components if provided
    const componentsWithContext: any = {};
    if (components) {
      for (const methodName in components) {
        if (Object.prototype.hasOwnProperty.call(components, methodName)) {
          const method: Function = components[methodName as keyof Display["components"]];
          if (method) {
            componentsWithContext[methodName as keyof Display["components"]] = (data: any, context: ResourceContext | undefined) => {
              if (context) return method(data, context);
              else return method(data, { resource, props: {} });
            };
          }
        }
      }
    }

    resource.display = {
      ...resource.display,
      components: {
        ...componentsWithContext
      },
      ctx: ctx || { resource, props: {} },
      admissions,
    };
  }

  if (annotations.actions) {
    resource.actions = [
      ...(resource.actions || []),
      ...annotations.actions,
    ];
  }

  return resource;
};
