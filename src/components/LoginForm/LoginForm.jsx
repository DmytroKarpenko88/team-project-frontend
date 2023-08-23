import { useState } from 'react';
import { Form, Formik } from 'formik';
import { loginSchema } from 'utils/shemas/AuthSchema';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

import {
  MainLogForm,
  Titel,
  FormField,
  InputForm,
  ErrorMess,
  Button,
  ToRegister,
  LinkStyled,
  OnIcon,
  OffIcon,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log(' values:', values);
    const data = {
      email: values.email,
      password: values.password,
    };
    return dispatch(login(data));
  };

  return (
    <MainLogForm>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Titel>Login</Titel>
            <FormField>
              <InputForm
                //   autoFocus="autofocus"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="on"
              />
              <ErrorMess name="email" component="p" />
            </FormField>

            <FormField>
              <InputForm
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="on"
              />
              <span id="visibilityBtn" onClick={togglePassword}>
                {passwordShow ? <OnIcon /> : <OffIcon />}
              </span>
              <ErrorMess name="password" component="p" />
            </FormField>
            <div>
              <Button type="submit">Login</Button>
            </div>

            <ToRegister>
              Don't have an account?
              <LinkStyled to="/register">Register</LinkStyled>
            </ToRegister>
          </Form>
        )}
      </Formik>
    </MainLogForm>
  );
}
