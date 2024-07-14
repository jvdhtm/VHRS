var mockType = function () {
    return;
};
export var LoginResource = {
    baseUrl: '/auth/login/',
    relatedurls: ['/auth/login/'],
    name: 'LoginResource',
    type: mockType,
    fields: {
        id: { title: 'ID', type: 'integer', readOnly: true },
        email: { title: 'Email', type: 'string', format: 'email', minLength: 1 },
        password: { title: 'Password', type: 'string', minLength: 1 },
        timestamp: {
            title: 'Timestamp',
            type: 'string',
            format: 'date-time',
            readOnly: true,
        },
    },
    required: ['email', 'password'],
};
//# sourceMappingURL=Login.js.map