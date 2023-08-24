import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  ConfirmWrapper,
  Error,
  FieldsContainer,
  FileInput,
  FileInputLabel,
  Input,
  InputContainer,
  Label,
  StyledForm,
  SubmitBtn,
  Text,
  UserPhoto,
} from './UserForm.styled';
import Loader from 'components/Loader/Loader';
import validationSchema from 'utils/shemas/validationSchema';
// import defaultAvatar from 'images/Profile/Photo_default_2x.jpg';
import { Camera, Check, Cross } from 'components/icons';
import { updateUser } from 'redux/auth/auth-operations';
import { selectIsLoading, selectUser } from 'redux/auth/auth-selectors';

const UserForm = ({ disabled, setIsFormDisabled }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectIsLoading);

  const [showConfirm, setShowConfirm] = useState(false);
  const [errorsVisible, setErrorsVisible] = useState(true);
  const [preview, setPreview] = useState(user?.avatarURL || '');

  const initialValues = {
    avatar: user?.avatarURL || '',
    name: user?.name || '',
    email: user?.email || '',
    birthday: user?.birthday || '',
    phone: user?.phone || '',
    city: user?.city || '',
  };

  const formikProps = useFormik({
    initialValues,
    validationSchema,

    // onSubmit: values => {
    //   if (Object.keys(formikProps.errors).length === 0) {
    //     const formData = new FormData();
    //     for (let key in values) {
    //       formData.append(`${key}`, values[key]);
    //       console.log(key, values);
    //     }
    //     dispatch(updateUser(formData));
    //     console.log(formData);
    //     setIsFormDisabled(prevState => !prevState);
    //   }
    // },

    onSubmit: values => {
      if (Object.keys(formikProps.errors).length === 0) {
        console.log('No errors. Submitting form data:', values);
        const formData = new FormData();
        for (let key in values) {
          formData.append(`${key}`, values[key]);
        }
        dispatch(updateUser({ formData }));
        console.log(formData);
      } else {
        console.log('Errors found:', formikProps.errors);
      }
    },
  });

  useEffect(() => {
    if (loading === false) {
      setPreview(user.avatarURL);
    }
  }, [loading, user.avatarURL]);

  const handleClose = e => {
    if (e.currentTarget.id === 'cancel') {
      setPreview(user.avatarURL);
    }
    setShowConfirm(false);
  };

  useEffect(() => {
    if (!disabled) {
      setErrorsVisible(true);
    } else {
      setErrorsVisible(false);
      setPreview(user.avatarURL);
      setShowConfirm(false);
    }
  }, [disabled, formikProps, user.avatarURL]);

  const handleFileInputChange = event => {
    const file = event.currentTarget.files[0];
    formikProps.setFieldValue('avatar', file);
    setPreview(URL.createObjectURL(file));
    setShowConfirm(true);
  };

  return (
    <>
      {user && (
        <form onSubmit={formikProps.handleSubmit}>
          <StyledForm>
            <div>
              {!disabled ? (
                <UserPhoto src={preview} />
              ) : (
                <UserPhoto src={user.avatarURL} />
              )}

              {!disabled && !showConfirm && (
                <div style={{ marginTop: '15px' }}>
                  <FileInputLabel htmlFor="file">
                    <Camera /> Edit photo
                  </FileInputLabel>
                  <FileInput
                    type="file"
                    name="avatar"
                    id="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                  />
                </div>
              )}
              {showConfirm && !disabled && (
                <ConfirmWrapper>
                  <button
                    type="button"
                    className="confirm-icon"
                    id="confirm"
                    onClick={handleClose}
                  >
                    <Check />
                  </button>
                  <Text>Confirm</Text>
                  <button
                    type="button"
                    className="cancel-icon"
                    id="cancel"
                    onClick={handleClose}
                  >
                    <Cross />
                  </button>
                </ConfirmWrapper>
              )}
            </div>
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
      )}

      {loading && <Loader />}
    </>
  );
};

export default UserForm;
