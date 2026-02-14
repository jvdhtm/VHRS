import { Action, annotateResource, ResourceContext} from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";
import LockIcon from '@mui/icons-material/Lock'; // Import Material-UI Lock icon
import ForgotPasswordIcon from '@mui/icons-material/HelpOutline'; 
import { UseAuthHook } from "../context/AuthContext";

const newAnnotations: AnnotatedResourceFields<definitions['Login']> = {
  email: {
    display: {
      partOf: 'GENERAL', // Marking email as GENERAL
    },
  },
  password: {
    display: {
      partOf: 'GENERAL', // Marking password as GENERAL
    },
  },
  ...commonAnnotations
};

const loginActions: Action[] = [
  ...defaultActions,
  ()=>({
    name: 'forgotPassword',
    title: 'Forgot Password',
    route: () => '/forgot-password', 
    icon: <ForgotPasswordIcon />, 
    color: 'warning', 
    className: 'forgot-password-button', 
  }),
  (data?: any, ctx?: ResourceContext)=>({
    name: 'login',
    title: 'Login',
    useHandler: async () => {
      if(ctx?.auth)
      {
        const { login } = ctx?.auth as UseAuthHook; 
        return login(data.email, data.password); 
      }
      return 
    },
    redirect: '/dashboard',
    icon: <LockIcon />, 
  }),
];

annotateResource("Login", {
  fields: newAnnotations,
  display: {
    components:{
      asListItem: (data: any) => <div>{data}</div>,
      asTitle: () => <>Login</>,
    },
    partOf: 'DEFAULT_ADMIN', // Pass the DEFAULT_ADMIN setting from newAnnotations
  },
  actions:loginActions
});


