import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions, relatedFieldAnnotation } from "./common";
import { Contacts, Home, LocationCity, MarkunreadMailbox } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Address']> = {
  ...commonAnnotations,
  person: {
    ...relatedFieldAnnotation('Person'),
    sortable: true,
    filterable: true,
  },
  address1: {
    display: {
      components: {
        asTitle: (data: any) => <span><Home fontSize="small" /> {data}</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
  city: {
    sortable: true,
    filterable: true,
  },
  country: {
    sortable: true,
    filterable: true,
  },
  zip: {
    display: {
      components: {
        asTitle: (data: any) => <span><MarkunreadMailbox fontSize="small" /> {data}</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
};

annotateResource("Address", {
  fields: newAnnotations,
  display: {
    components:{
      asListItem: (data: any) => <span><Home fontSize="small" /> {data.address1}, {data.city}</span>,
      asTitle: () => <>Address</>,
      asIcon: () => <Contacts/>
    }
  },
  actions: defaultActions
});
