var mockType = function () {
    return;
};
export var User = {
    baseUrl: '/user/',
    relatedurls: ['/user/', '/user/{id}/'],
    name: 'User',
    type: mockType,
    fields: {
        id: { title: 'ID', type: 'integer', readOnly: true },
        email: {
            title: 'Email address',
            type: 'string',
            format: 'email',
            maxLength: 254,
        },
        password: {
            title: 'Password',
            type: 'string',
            maxLength: 128,
            minLength: 1,
        },
        first_name: { title: 'First name', type: 'string', maxLength: 150 },
        last_name: { title: 'Last name', type: 'string', maxLength: 150 },
        is_active: {
            title: 'Active',
            description: 'Designates whether this user should be treated as active. Unselect this instead of deleting accounts.',
            type: 'boolean',
        },
        is_staff: {
            title: 'Staff status',
            description: 'Designates whether the user can log into this admin site.',
            type: 'boolean',
        },
        status: {
            title: 'Status',
            type: 'string',
            enum: ['activated', 'deactivated', 'pending', 'confirmed', 'archived'],
        },
    },
    required: ['password'],
};
//# sourceMappingURL=User.js.map