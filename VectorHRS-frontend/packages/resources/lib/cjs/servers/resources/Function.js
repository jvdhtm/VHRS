"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
var mockType = function () {
    return;
};
exports.Function = {
    baseUrl: '/function/',
    relatedurls: ['/function/', '/function/{id}/'],
    name: 'Function',
    type: mockType,
    fields: {
        id: { title: 'ID', type: 'integer', readOnly: true },
        name: { title: 'Name', type: 'string', maxLength: 100, 'x-nullable': true },
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
    required: ['shape'],
};
//# sourceMappingURL=Function.js.map