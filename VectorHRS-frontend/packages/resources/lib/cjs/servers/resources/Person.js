"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonResource = void 0;
var mockType = function () {
    return;
};
exports.PersonResource = {
    baseUrl: '/person/',
    relatedurls: ['/person/', '/person/{id}/'],
    name: 'PersonResource',
    type: mockType,
    fields: {
        id: { title: 'ID', type: 'integer', readOnly: true },
        firstname: {
            title: 'Firstname',
            type: 'string',
            maxLength: 100,
            'x-nullable': true,
        },
        lastname: {
            title: 'Lastname',
            type: 'string',
            maxLength: 100,
            'x-nullable': true,
        },
        age: { title: 'Age', type: 'integer' },
        nationalId: {
            title: 'NationalId',
            type: 'string',
            maxLength: 100,
            'x-nullable': true,
        },
        status: {
            title: 'Status',
            type: 'string',
            enum: ['activated', 'deactivated', 'pending', 'confirmed', 'archived'],
        },
        created_date_time: {
            title: 'Created date time',
            type: 'string',
            format: 'date-time',
        },
    },
    required: ['age', 'status'],
};
//# sourceMappingURL=Person.js.map