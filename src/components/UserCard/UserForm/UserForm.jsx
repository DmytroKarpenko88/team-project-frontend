import { useState } from 'react';
import { useFormik } from 'formik';
import {
  FieldsContainer,
  Input,
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
    validationSchema,
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
  return (
    <>
      <form onSubmit={formikProps.handleSubmit}>
        <StyledForm>
          <FieldsContainer>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              disabled={disabled}
            />
            <Label htmlFor="email">Email:</Label>
            <Input
              type="text"
              name="email"
              placeholder="Name@mail.com"
              disabled={disabled}
            />
            <Label htmlFor="birthday">Birthday:</Label>
            <Input
              type="text"
              name="birthday"
              placeholder="dd.mm.yyyy"
              disabled={disabled}
            />
            <Label htmlFor="phone">Phone:</Label>
            <Input
              type="text"
              name="phone"
              placeholder="+380..."
              disabled={disabled}
            />
            <Label htmlFor="city">City:</Label>
            <Input
              type="text"
              name="city"
              placeholder="City"
              disabled={disabled}
            />
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
