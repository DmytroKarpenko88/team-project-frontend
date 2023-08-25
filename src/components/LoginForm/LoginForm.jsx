import { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'utils/shemas/AuthSchema';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';

import {
  MainLogForm,
  Titel,
  FormField,
  InputForm,
  ErrorMess,
  SuccessMessage,
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
  const {isLoggedIn} = useAuth()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(data));
    resetForm();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  return (
    <MainLogForm>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({errors, touched}) => (
          <Form>
            <Titel>Login</Titel>
            <FormField>
              <InputForm
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="on"
              />
              { !errors.email && touched.email ? (<SuccessMessage>Success email is valid!</SuccessMessage>) : null }
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
              { !errors.password && touched.password? (<SuccessMessage>Success password is valid!</SuccessMessage>) : null }
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
