import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import {
  Error,
  FieldsContainer,
  Input,
  InputContainer,
  Label,
  StyledForm,
  SubmitBtn,
} from './UserForm.styled';
// import Loader from 'components/Loader/Loader';
import validationSchema from 'utils/shemas/validationSchema';

const UserForm = ({ disabled, setIsFormDisabled }) => {
  const [
    showConfirm,
    // setShowConfirm
  ] = useState(false);
  const [errorsVisible, setErrorsVisible] = useState(true);

  const initialValues = {
    avatar: '',
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
  };

  const formikProps = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      if (Object.keys(formikProps.errors).length === 0) {
        const formData = new FormData();
        for (let key in values) {
          formData.append(`${key}`, values[key]);
        }
        setIsFormDisabled(prevState => !prevState);
      }
    },
  });

  useEffect(() => {
    if (!disabled) {
      setErrorsVisible(true);
    } else {
      setErrorsVisible(false);
    }
  }, [disabled, formikProps]);

  return (
    <>
      <form onSubmit={formikProps.handleSubmit}>
        <StyledForm>
          <FieldsContainer>
            <InputContainer>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                disabled={disabled}
                onChange={formikProps.handleChange}
                value={formikProps.values.name}
                error={formikProps.touched.name && formikProps.errors.name}
              />
              {errorsVisible &&
                formikProps.touched.name &&
                formikProps.errors.name && (
                  <Error>{formikProps.errors.name}</Error>
                )}
            </InputContainer>

            <InputContainer>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="text"
                name="email"
                placeholder="user@mail.com"
                disabled={disabled}
                onChange={formikProps.handleChange}
                value={formikProps.values.email}
                error={formikProps.touched.email && formikProps.errors.email}
              />
              {errorsVisible &&
                formikProps.touched.email &&
                formikProps.errors.email && (
                  <Error>{formikProps.errors.email}</Error>
                )}
            </InputContainer>

            <InputContainer>
              <Label htmlFor="birthday">Birthday:</Label>
              <Input
                type="text"
                name="birthday"
                placeholder="dd.mm.yyyy"
                disabled={disabled}
                onChange={formikProps.handleChange}
                value={formikProps.values.birthday}
                error={
                  formikProps.touched.birthday && formikProps.errors.birthday
                }
              />
              {errorsVisible &&
                formikProps.touched.birthday &&
                formikProps.errors.birthday && (
                  <Error>{formikProps.errors.birthday}</Error>
                )}
            </InputContainer>

            <InputContainer>
              {' '}
              <Label htmlFor="phone">Phone:</Label>
              <Input
                type="text"
                name="phone"
                placeholder="+380..."
                disabled={disabled}
                onChange={formikProps.handleChange}
                value={formikProps.values.phone}
                error={formikProps.touched.phone && formikProps.errors.phone}
              />
              {errorsVisible &&
                formikProps.touched.phone &&
                formikProps.errors.phone && (
                  <Error>{formikProps.errors.phone}</Error>
                )}
            </InputContainer>

            <InputContainer>
              <Label htmlFor="city">City:</Label>
              <Input
                type="text"
                name="city"
                placeholder="City"
                disabled={disabled}
                onChange={formikProps.handleChange}
                value={formikProps.values.city}
                error={formikProps.touched.city && formikProps.errors.city}
              />
              {errorsVisible &&
                formikProps.touched.city &&
                formikProps.errors.city && (
                  <Error>{formikProps.errors.city}</Error>
                )}
            </InputContainer>

            {!disabled && (
              <SubmitBtn type="submit" disabled={showConfirm}>
                Save
              </SubmitBtn>
            )}
          </FieldsContainer>
        </StyledForm>
      </form>
      {/* <Loader /> */}
    </>
  );
};

export default UserForm;
