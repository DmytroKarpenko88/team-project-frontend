import { useState } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  MainLogForm,
  Titel,
  InputForm,
  Button,
  ToRegister,
  LinkStyled,
  OnIcon,
  OffIcon,
} from './LoginForm.styled';

export default function LoginForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => setPasswordShow(prevState => !prevState);
  return (
    <MainLogForm>
      <Formik
      // validationSchema={user.loginValidationSchema}
      // initialValues={initialValues}
      // onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Titel>Login</Titel>

            <InputForm
            //   autoFocus="autofocus"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="on"
            />
            <ErrorMessage name="email" component="p" />

            <InputForm
              name="password"
              type={passwordShow ? 'text' : 'password'}
              placeholder="Password"
              autoComplete="on"
            />
            <span id="visibilityBtn" onClick={togglePassword}>
              {passwordShow ? <OnIcon /> : <OffIcon />}
            </span>
            <ErrorMessage name="password" component="p" />

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
