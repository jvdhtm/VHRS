import * as Yup from 'yup';
import { REQUIRED_FIELD, INVALID_EMAIL, PASSWORD_MIN_LENGTH } from './messages';

const login = {
  schema: {
    email: Yup.string().email(INVALID_EMAIL).required(REQUIRED_FIELD),
    password: Yup.string().required(REQUIRED_FIELD).min(6, PASSWORD_MIN_LENGTH),
  },
  initialValues: {
    email: 'rachelsolomon@example.com',
    password: 'Admin1234@',
  },
  validationSchema: {},
};

login.validationSchema = Yup.object().shape(login.schema);

export default { login };
