import { useState } from 'react';
import { Form, Formik } from 'formik';
import { loginSchema } from 'utils/shemas/AuthSchema';
// import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';

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

  const handleLoginSubmit = values => {
    console.log(' values:', values);
    // const data = {
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    //   confirmPassword: values.password,
    // };
    // return dispatch(register(data));
  };

  return (
    <MainLogForm>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleLoginSubmit}
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

            {/* {isError && <p className={css.error__login}>{isError.message}</p>}
            {isError && (
              <p className={css.error__login}>{isError.additionalInfo}</p>
            )} */}
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
