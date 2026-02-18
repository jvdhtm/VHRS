import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions, relatedFieldAnnotation, phoneNumberAnnotation } from "./common";
import { Phone as PhoneIcon, ContactPhone } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Phone']> = {
  ...commonAnnotations,
  person: {
    ...relatedFieldAnnotation('Person'),
    sortable: true,
    filterable: true,
  },
  ...phoneNumberAnnotation,
};

annotateResource("Phone", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span><PhoneIcon fontSize="small" /> {data.phoneNumber}</span>,
      asTitle: () => <>Phone</>,
      asIcon: () => <ContactPhone />,
    }
  },
  actions: defaultActions
});
