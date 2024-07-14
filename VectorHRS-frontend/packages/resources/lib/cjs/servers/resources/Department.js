"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentResource = void 0;
var mockType = function () {
    return;
};
exports.DepartmentResource = {
    baseUrl: '/department/',
    relatedurls: ['/department/', '/department/{id}/'],
    name: 'DepartmentResource',
    type: mockType,
    fields: {
        id: { title: 'ID', type: 'integer', readOnly: true },
        name: { title: 'Name', type: 'string', maxLength: 100, 'x-nullable': true },
        parentId: {
            title: 'ParentId',
            type: 'integer',
            'x-vhrs-relatedResource': 'staff_api.Department',
            'x-nullable': true,
        },
        description: {
            title: 'Description',
            type: 'string',
            maxLength: 100,
            'x-nullable': true,
        },
        shape: {
            title: 'Shape',
            type: 'string',
            enum: ['circle', 'square', 'rectangle', 'triangle'],
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
    required: ['shape', 'status'],
};
//# sourceMappingURL=Department.js.map