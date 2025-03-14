var mockType = function () {
    return;
};
export var Login = {
    baseUrl: '/auth/login/',
    relatedurls: ['/auth/login/'],
    name: 'Login',
    type: mockType,
    fields: {
        email: { title: 'Email', type: 'string', format: 'email', minLength: 1 },
        password: { title: 'Password', type: 'string', minLength: 1 },
        user: {
            title: 'User',
            type: 'integer',
            readOnly: true,
            'x-vhrs-relatedResource': 'identity_api.CustomUser',
        },
    },
    required: ['email', 'password'],
};
//# sourceMappingURL=Login.js.map