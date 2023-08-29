import * as Yup from 'yup';

const phoneRegExp = /^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;

const dateRegExp = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19\d\d|20\d\d)$/;

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
    .matches(dateRegExp, 'Correct format: dd-mm-yyyy')
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
