import type { Models, ResourceObject } from '../../types';

const mockType = (): Models['Login'] | undefined => {
  return;
};

export const LoginResource: ResourceObject = {
  baseUrl: '/logout/logout/',
  relatedurls: ['/logout/logout/'],
  name: 'LoginResource',
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
