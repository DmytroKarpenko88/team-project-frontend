import * as Yup from 'yup';

const phoneRegExp = /^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;

const dateRegExp =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const cityRegExp = /^[A-Z][A-Za-z\s]*$/;

const validationSchema = Yup.object().shape({
  avatarURL: Yup.mixed()
    .test('file-size', 'File size is too large', value => {
      if (value) {
        return value.size <= 1024 * 1024;
      }
      return true;
    })
    .required('File is required'),
  name: Yup.string().required('Please, enter your name'),
  email: Yup.string()
    .email('Enter correct email')
    .required('Please, enter your email'),
  birthday: Yup.string()
    .matches(dateRegExp, 'Correct format: dd.mm.yyyy')
    .max(new Date(), 'Future date is not allowed')
    .required('Birthday is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Enter the phone number +38(0xх)xxx-xx-xx')
    .required('Enter your phone number'),
  city: Yup.string()
    .matches(cityRegExp, 'Enter valid format for city')
    .required('Please, enter your city'),
});

export default validationSchema;
