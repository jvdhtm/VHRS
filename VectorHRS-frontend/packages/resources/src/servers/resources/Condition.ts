import type { Models, ResourceObject } from '../../types';

const mockType = (): Models['Condition'] | undefined => {
  return;
};

export const ConditionResource: ResourceObject = {
  baseUrl: '/condition/',
  relatedurls: ['/condition/', '/condition/{id}/'],
  name: 'ConditionResource',
  type: mockType,
  fields: {
    id: { title: 'ID', type: 'integer', readOnly: true },
    severity: {
      title: 'Severity',
      type: 'string',
      enum: ['small', 'mild', 'sever'],
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

  required: ['severity', 'status'],
};
