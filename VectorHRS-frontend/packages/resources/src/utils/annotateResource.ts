import * as resources from "../servers/resources/index";
import {
  ResourceObject,
  Annotations,
  ResourceKeys,
  AnnotatedResourceFields,
} from "../types"; // Adjust imports as per your project structure
import { addContext, addContextToActions } from "./addContext"; // Adjust import path as needed

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

          const componentsWithContext = addContext(components, resource);

          let tempField = existingFields[fieldName];
          if (existingFields && typeof tempField !== 'undefined') {
            if (!tempField.display) tempField.display = {};
            let oldDisplay = tempField.display;

            tempField.display = {
              ...(oldDisplay),
              components: {
                ...componentsWithContext
              },
              ctx: ctx || { resource, props: {} },
              admissions: admissions,
            };

            existingFields[fieldName] = field;
          }
        }
      }
    }
  }

  if (annotations.display) {
    const { components, ctx, admissions } = annotations.display;

    const componentsWithContext = addContext(components, resource);

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
    resource.actions = addContextToActions(annotations.actions, resource);
  }

  if (annotations.actions) {
    resource.actions = addContextToActions(annotations.actions, resource);
  }

  if (annotations.menu) {
    resource.menu = [ ...annotations.menu];
  }

  return resource;
};
