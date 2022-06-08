import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { flowResult } from 'mobx';
import { observer } from 'mobx-react';
import { forms } from '../constants';
import resources from '@vhrs/resources';
import { useContext } from 'react';
import type { IAuth } from '@vhrs/resources/types/authContext';
import { useNavigate } from 'react-router-dom';


const {
  login: { initialValues, validationSchema },
} = forms;

const Login = () => {
  const { isAuth, AuthUser } = useContext<IAuth>(
    resources.authContext.AuthContext,
  );
  let navigate = useNavigate();

  if (isAuth) {
    window.location.href = "/";
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (formValues) => {
      await flowResult(
        AuthUser({ username: formValues.email, password: formValues.password }),
      );
    },
  });

  return (
    <Flex bg='gray.100' align='center' justify='center' h='100vh'>
      <Box bg='white' p={6} rounded='md'>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl isInvalid={!!formik.errors.email}>
              <FormLabel htmlFor='email'>E-mail</FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                variant='filled'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {!!formik.errors.email && (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!formik.errors.password}>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                name='password'
                type='password'
                variant='filled'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {!!formik.errors.password && (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              type='submit'
              colorScheme='purple'
              width='full'
              isLoading={formik.isSubmitting}
            >
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default observer(Login);
