import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";
import { Newspaper, Article, Title } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['NewsLetter']> = {
  ...commonAnnotations,
  name: {
    ...commonAnnotations.name,
    display: {
      components: {
        asTitle: (data: any) => <span><Title fontSize="small" /> {data}</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
  autor: {
    sortable: true,
    filterable: true,
  },
};

annotateResource("NewsLetter", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data: any) => <span><Article fontSize="small" /> {data.name}</span>,
      asTitle: () => <>News</>,
      asIcon: () => <Newspaper/>
    }
  },
  actions: defaultActions
});
