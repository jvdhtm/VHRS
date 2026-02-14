import { Action, annotateResource, ResourceContext} from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";
import LockIcon from '@mui/icons-material/Lock'; 
import ForgotPasswordIcon from '@mui/icons-material/HelpOutline'; 
import { UseAuthHook } from "../context/AuthContext";

const newAnnotations: AnnotatedResourceFields<definitions['Login']> = {
  email: {
    display: {
      components: {
        asTitle: (data: any) => <span>{data}</span>,
        asFormInput: (data?: any, ctx?: ResourceContext) => {
          const TextField = ctx?.props.TextField;
          if (!TextField) return null;
          return (
            <TextField
              label="Email"
              name="email"
              value={data}
              onChange={(e: any) => ctx?.props.onChange?.(e.target.value)}
              fullWidth
              type="email"
            />
          );
        },
        asTableCell: (data: any) => <span>{data}</span>,
      },
    },
  },
  password: {
    display: {
      components: {
        asTitle: (data: any) => <span>******</span>,
        asFormInput: (data?: any, ctx?: ResourceContext) => {
          const TextField = ctx?.props.TextField;
          if (!TextField) return null;
          return (
            <TextField
              label="Password"
              name="password"
              value={data}
              onChange={(e: any) => ctx?.props.onChange?.(e.target.value)}
              fullWidth
              type="password"
            />
          );
        },
        asTableCell: (data: any) => <span>******</span>,
      },
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
    }
  },
  actions:loginActions
});


