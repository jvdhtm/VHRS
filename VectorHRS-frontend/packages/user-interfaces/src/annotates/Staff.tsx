import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions, relatedFieldAnnotation } from "./common";
import { Badge, BusinessCenter, AccountTree, AccountCircle } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Staff']> = {
  ...commonAnnotations,
  department: {
    ...relatedFieldAnnotation('Department'),
    sortable: true,
    filterable: true,
  },
  condition: {
    ...relatedFieldAnnotation('Condition'),
    sortable: true,
    filterable: true,
  },
  who: {
    ...relatedFieldAnnotation('Person'),
    sortable: true,
    filterable: true,
  },
  title: {
    display: {
      components: {
        asTitle: (data: any) => <span><BusinessCenter fontSize="small" /> {data}</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
  level: {
    sortable: true,
    filterable: true,
  },
};

annotateResource("Staff", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span><Badge fontSize="small" /> {data.title}</span>,
      asTitle: () => <>Staff</>,
      asIcon: () => <AccountCircle />,
    }
  },
  actions: defaultActions
});
