import { useState } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';

import { FormContainer, Titel, InputForm, Button, LinkStyled, ToLogin, OnIconPass, OffIconPass, OnIconConPass, OffIconConPass} from "./AuthForm.styled"

export default function AuthForm() {
    const [passwordShow, setPasswordShow] = useState(false);
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
    const togglePassword = () => setPasswordShow(prevState => !prevState);
    const toggleConfirmPassword = () => setConfirmPasswordShow(prevState => !prevState);
    return (
        <FormContainer>
        <Formik
        // validationSchema={user.loginValidationSchema}
        // initialValues={initialValues}
        // onSubmit={handleSubmit}
      >
        {() => (
          <Form >
            <Titel>Registration</Titel>
            <div >
              <InputForm
                // autoFocus="autofocus"
                name="name"
                type="name"
                placeholder="Name"
                autoComplete="off"
              />
              <ErrorMessage name="name" component="p"  />
            </div>
            <div >
              <InputForm
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
              />
              <ErrorMessage name="email" component="p"  />
            </div>
            <div >
              <InputForm
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="off"
              />
              <span
                id="visibilityBtn"
                onClick={togglePassword}
              >
                {passwordShow ? <OnIconPass /> : <OffIconPass />}
              </span>
              <ErrorMessage
                name="password"
                component="p"
              />
            </div>

            <div >
              <InputForm
                name="Confirm password"
                type={confirmPasswordShow ? 'text' : 'password'}
                placeholder="Confirm password"
                autoComplete="off"
              />
              <span
                id="visibilityBtn"
                onClick={toggleConfirmPassword}
              >
                {confirmPasswordShow ? <OnIconConPass /> : <OffIconConPass />}
              </span>
              <ErrorMessage
                name="Confirm password"
                component="p"
              />
            </div>

            <div >
              <Button
                type="submit"
              >Registration</Button>
            </div>

            {/* {isError && <p className={css.error__login}>{isError.message}</p>}
            {isError && (
              <p className={css.error__login}>{isError.additionalInfo}</p>
            )} */}
            <ToLogin >
               Already have an account?
              <LinkStyled to="/login" >
                 Login
              </LinkStyled>
            </ToLogin>
          </Form>
        )}
      </Formik>
        </FormContainer>
    )
}