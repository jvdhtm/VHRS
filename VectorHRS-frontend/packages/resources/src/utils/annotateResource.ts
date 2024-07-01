import * as resources from "../servers/resources/index";
import {
  ResourceObject,
  Annotations,
  ResourceKeys,
} from "../types"; // Adjust the import path according to your project structure

/**
 * Utility function to annotate a resource with new annotations
 * @param resourceKey - The key of the resource to be annotated
 * @param annotations - The new annotations to merge into the resource
 * @returns - The annotated resource object
 */
export const annotateResource = (
  resourceKey: ResourceKeys,
  annotations: Annotations<any>
): ResourceObject => {
  // Retrieve the existing resource
  const resource: ResourceObject = resources[resourceKey];

  // Merge the new annotations into the existing resource
  const annotatedResource: ResourceObject = {
    ...resource,
    ...annotations,
    fields: {
      ...resource.fields,
      ...annotations.fields,
    },
    display: {
      ...resource.display,
      ...annotations.display,
    },
    actions: [
      ...(resource.actions || []),
      ...(annotations.actions || []),
    ],
  };

  return annotatedResource;
};
