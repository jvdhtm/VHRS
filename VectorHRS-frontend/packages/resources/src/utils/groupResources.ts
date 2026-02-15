import { ResourceObject } from "../types";

export interface GroupedResources {
  [key: string]: ResourceObject[];
}

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const toGroupName = (prefix: string): string => {
  // Convert 'people' -> 'People', 'staff_api' -> 'StaffApi', 'identity_api' -> 'IdentityApi'
  return prefix.split('_').map(capitalizeFirstLetter).join('');
};

export const groupResourcesByModule = (resources: ResourceObject[]): GroupedResources => {
  const groups: GroupedResources = {};

  resources.forEach((resource) => {
    const fields = resource.fields;
    let addedToGroup = false;

    // Check related resources to determine group
    Object.values(fields).forEach((field: any) => {
      if (field?.['x-vhrs-relatedResource']) {
        const related = field['x-vhrs-relatedResource'];
        const [prefix] = related.split('.');
        
        const groupName = toGroupName(prefix);
        
        if (!groups[groupName]) {
          groups[groupName] = [];
        }
        
        // Avoid duplicates if resource has multiple fields pointing to same module
        if (!groups[groupName].find(r => r.name === resource.name)) {
          groups[groupName].push(resource);
          addedToGroup = true;
        }
      }
    });

    // Also check by resource name prefix if not added to any group
    if (!addedToGroup) {
      const name = resource.name;
      const [prefix] = name.split(/(?=[A-Z])/);
      const groupName = toGroupName(prefix);
      
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(resource);
    }
  });

  return groups;
};
