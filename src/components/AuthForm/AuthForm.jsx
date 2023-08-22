import { useState } from 'react';
import {  Form, Formik } from 'formik';
// import { useLocation } from 'react-router-dom';
import { registerSchema } from 'utils/shemas/AuthSchema';

import {
  FormContainer,
  Titel,
  FormField,
  InputForm,
  ErrorMess,
  Button,
  LinkStyled,
  ToLogin,
  OnIconPass,
  OffIconPass,
  OnIconConPass,
  OffIconConPass,
} from './AuthForm.styled';

const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

export default function AuthForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
//   const location = useLocation();
//   const isRegister = location.pathname === '/register';

  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const toggleConfirmPassword = () => setConfirmPasswordShow(prevState => !prevState);

  const handleRegisterSubmit = values => {
    console.log(" values:",  values)
    // const data = {
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    //   confirmPassword: values.password,
    // };  
    // return dispatch(register(data));
    };
  return (
    <FormContainer>
      <Formik
      validationSchema={registerSchema}
      initialValues={initialValues}
      onSubmit={handleRegisterSubmit}
      >
        {() => (
          <Form>
            <Titel>Registration</Titel>
            <FormField>
              <InputForm
                // autoFocus="autofocus"
                name="name"
                type="name"
                placeholder="Name"
                autoComplete="off"
              />
              <ErrorMess name="name" component="p" />
            </FormField>
            <FormField>
              <InputForm
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
              />
              <ErrorMess name="email" component="p" />
            </FormField>
            <FormField>
              <InputForm
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="off"
              />
              <span id="visibilityBtn" onClick={togglePassword}>
                {passwordShow ? <OnIconPass /> : <OffIconPass />}
              </span>
              <ErrorMess name="password" component="p" />
            </FormField>

            <FormField>
              <InputForm
                name="confirmPassword"
                type={confirmPasswordShow ? 'text' : 'password'}
                placeholder="Confirm password"
                autoComplete="off"
              />
              <span id="visibilityBtn" onClick={toggleConfirmPassword}>
                {confirmPasswordShow ? <OnIconConPass /> : <OffIconConPass />}
              </span>
              <ErrorMess name="confirmPassword" component="p" />
            </FormField>

            <div>
              <Button type="submit">Registration</Button>
            </div>

            {/* {isError && <p >{isError.message}</p>}
            {isError && (<p >{isError.additionalInfo}</p>)} */}
            <ToLogin>
              Already have an account?
              <LinkStyled to="/login">Login</LinkStyled>
            </ToLogin>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}
