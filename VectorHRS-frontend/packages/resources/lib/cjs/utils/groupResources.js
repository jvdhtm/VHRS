"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupResourcesByModule = void 0;
var capitalizeFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
var toGroupName = function (prefix) {
    // Convert 'people' -> 'People', 'staff_api' -> 'StaffApi', 'identity_api' -> 'IdentityApi'
    return prefix.split('_').map(capitalizeFirstLetter).join('');
};
var groupResourcesByModule = function (resources) {
    var groups = {};
    resources.forEach(function (resource) {
        var fields = resource.fields;
        var addedToGroup = false;
        // Check related resources to determine group
        Object.values(fields).forEach(function (field) {
            if (field === null || field === void 0 ? void 0 : field['x-vhrs-relatedResource']) {
                var related = field['x-vhrs-relatedResource'];
                var prefix = related.split('.')[0];
                var groupName = toGroupName(prefix);
                if (!groups[groupName]) {
                    groups[groupName] = [];
                }
                // Avoid duplicates if resource has multiple fields pointing to same module
                if (!groups[groupName].find(function (r) { return r.name === resource.name; })) {
                    groups[groupName].push(resource);
                    addedToGroup = true;
                }
            }
        });
        // Also check by resource name prefix if not added to any group
        if (!addedToGroup) {
            var name_1 = resource.name;
            var prefix = name_1.split(/(?=[A-Z])/)[0];
            var groupName = toGroupName(prefix);
            if (!groups[groupName]) {
                groups[groupName] = [];
            }
            groups[groupName].push(resource);
        }
    });
    return groups;
};
exports.groupResourcesByModule = groupResourcesByModule;
//# sourceMappingURL=groupResources.js.map