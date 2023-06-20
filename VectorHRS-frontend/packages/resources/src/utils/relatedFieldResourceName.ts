import type { ResourceField } from '../types';
export const relatedFieldResourceName = (resourceField:ResourceField) => {
    const relatedResourceType = resourceField?.type;
    let relatedResourceName;
  
    if (relatedResourceType === 'array') {
      if (resourceField?.relatedResource) {
        relatedResourceName = resourceField?.relatedResource;
      }
      else {
        relatedResourceName = resourceField?.items?.relatedResource;
      }
    } else if (relatedResourceType === 'integer') {
      relatedResourceName = resourceField?.relatedResource;
    }
  
    if (resourceField && relatedResourceName){
      const model = relatedResourceName?.split('.');
  
      if (model)
      { return model[model.length - 1] + 'Resource' }
  
      return '';
    }
  
    return '';
  };