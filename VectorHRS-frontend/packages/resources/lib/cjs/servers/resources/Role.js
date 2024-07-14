"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleResource = void 0;
var mockType = function () {
    return;
};
exports.RoleResource = {
    baseUrl: '/role/',
    relatedurls: ['/role/', '/role/{id}/'],
    name: 'RoleResource',
    type: mockType,
    fields: {
        id: { title: 'ID', type: 'integer', readOnly: true },
        title: { title: 'Title', type: 'string', maxLength: 30, minLength: 1 },
        user: {
            title: 'User',
            type: 'integer',
            'x-vhrs-relatedResource': 'identity_api.User',
        },
        permission: {
            title: 'Permission',
            type: 'string',
            enum: ['R', 'W', 'RW', 'RWD'],
        },
        app: {
            title: 'App',
            type: 'integer',
            'x-vhrs-relatedResource': 'identity_api.App',
        },
    },
    required: ['title', 'user', 'app'],
};
//# sourceMappingURL=Role.js.map