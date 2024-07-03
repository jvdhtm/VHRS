import * as resources from "../servers/resources/index";
import {
  ResourceObject,
  Annotations,
  ResourceKeys,
  AnnotatedResourceFields,
} from "../types"; // Adjust the import path and types according to your project structure

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
        existingFields[fieldName] = {
          ...existingFields[fieldName],
          ...annotations.fields[fieldName],
        };
      }
    }
  }

  if (annotations.display) {
    resource.display = {
      ...resource.display,
      ...annotations.display,
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
