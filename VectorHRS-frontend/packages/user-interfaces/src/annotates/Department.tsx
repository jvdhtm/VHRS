import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions, relatedFieldAnnotation } from "./common";
import { Business, AccountTree, Category } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Department']> = {
  ...commonAnnotations,
  name: {
    ...commonAnnotations.name,
    display: {
      components: {
        asTitle: (data: any) => <span><Business fontSize="small" /> {data}</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
  parentId: {
    ...relatedFieldAnnotation('Department'),
    sortable: true,
    filterable: true,
  },
  shape: {
    sortable: true,
    filterable: true,
  },
};

annotateResource("Department", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span><AccountTree fontSize="small" /> {data.name}</span>,
      asTitle: () => <>Department</>,
      asIcon: () => <Category/>
    }
  },
  actions: defaultActions
});
