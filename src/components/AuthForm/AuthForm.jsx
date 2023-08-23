import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerSchema } from 'utils/shemas/AuthSchema';
import { register } from '../../redux/auth/auth-operations';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
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
  confirmPassword: '',
};

export default function AuthForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const toggleConfirmPassword = () =>
    setConfirmPasswordShow(prevState => !prevState);

  const handleSubmit =  (values, { resetForm }) => {
    console.log(' values:', values);
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(data));
    resetForm()
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);


  return (
    <FormContainer>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Titel>Registration</Titel>
            <FormField>
              <InputForm
                name="name"
                type="name"
                placeholder="Name"
                autoComplete="on"
              />
              <ErrorMess name="name" component="p" />
            </FormField>
            <FormField>
              <InputForm
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
                {passwordShow ? <OnIconPass /> : <OffIconPass />}
              </span>
              <ErrorMess name="password" component="p" />
            </FormField>

            <FormField>
              <InputForm
                name="confirmPassword"
                type={confirmPasswordShow ? 'text' : 'password'}
                placeholder="Confirm password"
                autoComplete="on"
              />
              <span id="visibilityBtn" onClick={toggleConfirmPassword}>
                {confirmPasswordShow ? <OnIconConPass /> : <OffIconConPass />}
              </span>
              <ErrorMess name="confirmPassword" component="p" />
            </FormField>

            <div>
              <Button type="submit">Registration</Button>
            </div>

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
