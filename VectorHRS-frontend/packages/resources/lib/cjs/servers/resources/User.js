"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResource = void 0;
var mockType = function () {
    return;
};
exports.UserResource = {
    baseUrl: '/user/',
    relatedurls: ['/user/', '/user/{id}/'],
    name: 'UserResource',
    type: mockType,
    fields: {
        id: { title: 'ID', type: 'integer', readOnly: true },
        email: {
            title: 'Email address',
            type: 'string',
            format: 'email',
            maxLength: 255,
            minLength: 1,
        },
        password: {
            title: 'Password',
            type: 'string',
            maxLength: 1024,
            minLength: 1,
        },
        first_name: {
            title: 'First name',
            type: 'string',
            maxLength: 30,
            minLength: 1,
        },
        last_name: {
            title: 'Last name',
            type: 'string',
            maxLength: 30,
            minLength: 1,
        },
        is_active: { title: 'Is active', type: 'boolean' },
    },
    required: ['email', 'password', 'first_name', 'last_name'],
};
//# sourceMappingURL=User.js.map