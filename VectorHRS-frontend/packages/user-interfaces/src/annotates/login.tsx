import { ActionPropType, annotateResource, ResourceContext} from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields, DisplayResource } from "@vhrs/resources";
import { DynamicForm } from '../components/Dynamics/DynamicForm'; // Assuming DynamicForm is correctly implemented
import { commonAnnotations } from "./common";
import LockIcon from '@mui/icons-material/Lock'; // Import Material-UI Lock icon
import ForgotPasswordIcon from '@mui/icons-material/HelpOutline'; 

const asForm: DisplayResource = (_data?: any, ctx?: ResourceContext) => (
  <DynamicForm resource={ctx?.resource} includeFields={['email', 'password']} />
);

const newAnnotations: AnnotatedResourceFields<definitions['Login']> = {
  email: {
    display: {
      admissions: 'GENERAL', // Marking email as GENERAL
    },
  },
  password: {
    display: {
      admissions: 'GENERAL', // Marking password as GENERAL
    },
  },
  ...commonAnnotations
};

const loginActions: ActionPropType[] = [
  {
    name: 'login',
    title: 'Login',
    handler: (ctx: any) => {
      // Handle login logic here
      console.log('Logging in...');
    },
    icon: <LockIcon />, 
    color: 'primary',
    className: 'login-button', 
  },
  {
    name: 'forgotPassword',
    title: 'Forgot Password',
    route: () => '/forgot-password', 
    icon: <ForgotPasswordIcon />, 
    color: 'warning', 
    className: 'forgot-password-button', 
  },
];

annotateResource("LoginResource", {
  fields: newAnnotations,
  display: {
    components:{
      asList: (data: any) => <div>{data}</div>,
      asForm,
    },
    admissions: 'DEFAULT_ADMIN', // Pass the DEFAULT_ADMIN setting from newAnnotations
  },
  actions:loginActions
});


