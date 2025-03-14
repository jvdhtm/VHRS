import type { Models, ResourceObject } from '../../types';

const mockType = (): Models['PersonLog'] | undefined => {
  return;
};

export const PersonLog: ResourceObject = {
  baseUrl: '/personlog/',
  relatedurls: ['/personlog/', '/personlog/{id}/'],
  name: 'PersonLog',
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
    person: {
      title: 'Person',
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

  required: ['stage', 'person'],
};
