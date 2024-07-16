import type { Models, ResourceObject } from '../../types';

const mockType = (): Models['StaffLog'] | undefined => {
  return;
};

export const StaffLogResource: ResourceObject = {
  baseUrl: '/stafflog/',
  relatedurls: ['/stafflog/', '/stafflog/{id}/'],
  name: 'StaffLogResource',
  type: mockType,
  fields: {
    id: { title: 'ID', type: 'integer', readOnly: true },
    description: {
      title: 'Description',
      type: 'string',
      maxLength: 100,
      'x-nullable': true,
    },
    stage: {
      title: 'Stage',
      type: 'integer',
      'x-vhrs-relatedResource': 'people.PersonStage',
    },
    with_person: {
      title: 'With person',
      type: 'integer',
      'x-vhrs-relatedResource': 'people.Person',
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

  required: ['stage'],
};
