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
import defaultAvatar from 'images/Profile/Photo_default_2x.jpg';
import { Camera, Check, Cross } from 'components/icons';
import { updateUser } from 'redux/auth/auth-operations';
import { selectIsLoading, selectUser } from 'redux/auth/auth-selectors';

import InputMask from 'react-input-mask';

const UserForm = ({ disabled, setIsFormDisabled }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectIsLoading);

  const [showConfirm, setShowConfirm] = useState(false);
  const [errorsVisible, setErrorsVisible] = useState(true);
  const [preview, setPreview] = useState(user.avatarURL);
  const [avatarSelected, setAvatarSelected] = useState(false);

  const formatBirthday = value => {
    if (!value) return value;

    const trimmedValue = value.replace(/[^\d]/g, '');
    if (trimmedValue.length <= 2) {
      return trimmedValue;
    } else if (trimmedValue.length <= 4) {
      return `${trimmedValue.slice(0, 2)}.${trimmedValue.slice(2)}`;
    } else {
      return `${trimmedValue.slice(0, 2)}.${trimmedValue.slice(
        2,
        4
      )}.${trimmedValue.slice(4, 8)}`;
    }
  };

  const initialFormValues = {
    avatarURL: '',
    name: user?.name || '',
    email: user?.email || '',
    birthday: formatBirthday(user?.birthday) || '',
    phone: user?.phone || '+38(0__)___-__-__',
    city: user?.city || '',
  };

  const formikProps = useFormik({
    initialValues: initialFormValues,
    validationSchema,

    onSubmit: values => {
      console.log('formikProps.handleSubmit called');
      console.log('onSubmit values:', values);
      if (Object.keys(formikProps.errors).length === 0) {
        const formData = new FormData();
        for (let key in values) {
          if (key === 'avatarURL') {
            console.log('Adding to FormData:', key, values[key]);
            formData.append(key, values[key], values[key].name);
          } else {
            formData.append(key, values[key]);
          }
        }
        console.log('formData:', formData);
        dispatch(updateUser(formData));
        setIsFormDisabled(prevState => !prevState);
      }
    },
  });

  useEffect(() => {
    if (user.avatarURL) {
      formikProps.setFieldValue('avatarURL', user.avatarURL);
    }
  }, [user.avatarURL, formikProps]);

  useEffect(() => {
    if (loading === false) {
      setPreview(defaultAvatar);
    }
  }, [loading]);

  const handleClose = e => {
    if (e.currentTarget.id === 'cancel') {
      setPreview(defaultAvatar);
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
    console.log('handleFileInputChange called');
    const file = event.currentTarget.files[0];
    formikProps.setFieldValue('avatarURL', file);
    setPreview(URL.createObjectURL(file));
    setAvatarSelected(true);
    setShowConfirm(true);
  };

  const handleDateInputChange = event => {
    const inputDate = event.target.value;
    const formattedDate = formatBirthday(inputDate);
    formikProps.setFieldValue('birthday', formattedDate);
  };

  return (
    <>
      {user && (
        <form onSubmit={formikProps.handleSubmit}>
          <StyledForm>
            <div>
              {avatarSelected ? (
                <UserPhoto src={preview} alt="selected avatar" />
              ) : (
                <UserPhoto src={defaultAvatar} alt="default avatar" />
              )}

              {!disabled && !showConfirm && (
                <div style={{ marginTop: '15px' }}>
                  <FileInputLabel htmlFor="file">
                    <Camera /> Edit photo
                  </FileInputLabel>
                  <FileInput
                    type="file"
                    name="avatarURL"
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
                  onChange={handleDateInputChange}
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
                <Label htmlFor="phone">Phone:</Label>
                <InputMask
                  mask="+38(099)999-99-99"
                  maskChar=""
                  value={formikProps.values.phone}
                  onChange={formikProps.handleChange}
                  disabled={disabled}
                >
                  {() => (
                    <Input
                      type="text"
                      name="phone"
                      placeholder="+38(099)9999999"
                      error={
                        formikProps.touched.phone && formikProps.errors.phone
                      }
                      value={formikProps.values.phone}
                      onChange={formikProps.handleChange}
                      disabled={disabled}
                    />
                  )}
                </InputMask>
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
