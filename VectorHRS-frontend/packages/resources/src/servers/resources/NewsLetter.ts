import type { Models, ResourceObject } from '../../types';

const mockType = (): Models['NewsLetter'] | undefined => {
  return;
};

export const NewsLetterResource: ResourceObject = {
  baseUrl: '/newsletter/',
  relatedurls: ['/newsletter/', '/newsletter/{id}/'],
  name: 'NewsLetterResource',
  type: mockType,
  fields: {
    id: { title: 'ID', type: 'integer', readOnly: true },
    name: { title: 'Name', type: 'string', maxLength: 100, 'x-nullable': true },
    description: {
      title: 'Description',
      type: 'string',
      maxLength: 1000,
      'x-nullable': true,
    },
    html: { title: 'Html', type: 'string', 'x-nullable': true },
    autor: {
      title: 'Autor',
      type: 'integer',
      'x-vhrs-relatedResource': 'people.Person',
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

  required: ['autor'],
};
