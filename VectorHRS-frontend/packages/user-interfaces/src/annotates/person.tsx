import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";
import { People, Person, Badge, CalendarToday } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Person']> = {
  ...commonAnnotations,
  firstname: {
    display: {
      components: {
        asTitle: (data: any) => <span><Person fontSize="small" /> {data}</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
  lastname: {
    sortable: true,
    filterable: true,
  },
  age: {
    display: {
      components: {
        asTitle: (data: any) => <span><CalendarToday fontSize="small" /> {data} years</span>,
        asTableCell: (data: any) => <span>{data} years</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
  nationalId: {
    display: {
      components: {
        asTitle: (data: any) => <span><Badge fontSize="small" /> {data}</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
};

annotateResource("Person", {
  fields: newAnnotations,
  display: {
    components:{
      asListItem: (data: any) => <span><People fontSize="small" /> {data.firstname} {data.lastname}</span>,
      asTitle: () => <>People</>,
      asIcon: () => <People/>
    }
  },
  actions: defaultActions
});
