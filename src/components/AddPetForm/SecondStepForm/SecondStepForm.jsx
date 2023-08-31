import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  SecondStepFormDiv,
  SecondStepFormInput,
  SecondStepFormTitle,
} from './SecondStepForm.styled';
import {
  AddPetBtnCancel,
  AddPetBtnCancelDiv,
  AddPetBtnItem,
  AddPetBtnList,
  AddPetBtnNext,
} from '../AddPetForm.styled';
import { ArrowLeft, Paw } from 'components/icons';
import { validateField } from '../validatePet';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import { Link } from 'react-router-dom';
// import { TextField } from '@mui/material';

const SecondStepForm = ({ data, setData, nextStep, backStep }) => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [maxDate, setMaxDate] = useState();

  const isNameFieldValid = Boolean(!errors.name && !!data.name);
  const isBirthdayFieldValid = Boolean(!errors.birthday && !!data.birthday);
  const isBreedFieldValid = Boolean(!errors.type && !!data.type);
  const isTitleFieldValid = Boolean(!errors.title && !!data.title);

  useEffect(() => {
    if (data.category === 'pet') {
      setIsDisabled(
        !(isNameFieldValid && isBirthdayFieldValid && isBreedFieldValid)
      );
    }

    if (data.category !== 'pet') {
      setIsDisabled(
        !(
          isNameFieldValid &&
          isBirthdayFieldValid &&
          isBreedFieldValid &&
          isTitleFieldValid
        )
      );
    }
    setMaxDate(getCurrentDate());
  }, [
    errors,
    data.category,
    isBirthdayFieldValid,
    isBreedFieldValid,
    isNameFieldValid,
    isTitleFieldValid,
  ]);

  function getCurrentDate() {
    const now = new Date();
    const year = String(now.getFullYear());
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
    // console.log(`${day}-${month}-${year}`);
    // return `${day}-${month}-${year}`;
  }

  const handleChange = e => {
    // const input = e.target.name;
    // const value = e.target.value;
    // setData(prev => ({ ...prev, [input]: value }));

    const { name, value } = e.target;
    // console.log('name', name, 'value', value);

    setErrors(prevState => ({ ...prevState, [name]: '' }));

    let inputValue = value;

    if (name === 'birthday') {
      const [day, month, year] = value.split('-').reverse();
      if (day && month && year) {
        inputValue = `${year}-${month}-${day}`;
      }
    }

    // console.log('name', name, 'value', value);

    setData(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <>
      <SecondStepFormDiv>
        {data.category !== 'pet' && (
          <>
            <SecondStepFormTitle htmlFor="title">
              Title of add
              <SecondStepFormInput
                autoFocus
                type="text"
                name="title"
                placeholder="Title of add"
                value={data.title}
                onChange={handleChange}
                onBlur={() => validateField('title', data, setErrors)}
                className={errors.title ? 'invalid' : ''}
              />
            </SecondStepFormTitle>
            {!!errors.title && <ErrorMessage message={errors.title} />}
          </>
        )}
        <>
          <SecondStepFormTitle htmlFor="name">
            Pet's name
            <SecondStepFormInput
              // autoFocus={data.category !== 'pet' ? false : true}
              type="text"
              placeholder="Type name pet"
              name="name"
              onChange={handleChange}
              value={data.name}
              onBlur={() => validateField('name', data, setErrors)}
              className={errors.title ? 'invalid' : ''}
              required
            />
          </SecondStepFormTitle>
          {!!errors.name && <ErrorMessage message={errors.name} />}
        </>
        <>
          <SecondStepFormTitle htmlFor="birthday">
            Date of birth
            <SecondStepFormInput
              type="data"
              placeholder="Type date of birth in format DD-MM-YYYY"
              name="birthday"
              max={maxDate}
              onChange={handleChange}
              // data-pattern="**-**-****"
              // value={data.birthday.split('.').join('-')} //.reverse()
              value={data.birthday.split('.').join('-')} //.reverse() .split('.').join('-')
              onBlur={() => validateField('birthday', data, setErrors)}
              className={errors.birthday ? 'invalid' : ''}
              required
            />
          </SecondStepFormTitle>
          {!!errors.birthday && <ErrorMessage message={errors.birthday} />}
        </>
        <>
          <SecondStepFormTitle htmlFor="breed">
            Type
            <SecondStepFormInput
              // autoFocus
              type="text"
              placeholder="Type of pet"
              name="type"
              onChange={handleChange}
              value={data.type}
              onBlur={() => validateField('type', data, setErrors)}
              className={errors.breed ? 'invalid' : ''}
              required
            />
          </SecondStepFormTitle>
          {!!errors.breed && <ErrorMessage message={errors.breed} />}
        </>
      </SecondStepFormDiv>

      <AddPetBtnList>
        <AddPetBtnItem>
          <AddPetBtnNext
            type="button"
            // text="Next"
            // icon={<Paw width="24" height="24" fill="#FEF9F9" />}
            // clickHandler={nextStep}
            onClick={nextStep && (() => nextStep(false))}
            // filled={false}
            disabled={isDisabled}
          >
            Next
            {/* {step === 3 ? 'Done' : 'Next'} */}
            <Paw width="24" height="24" fill="#FEF9F9" />
          </AddPetBtnNext>
        </AddPetBtnItem>

        <AddPetBtnItem>
          {/* повернути на сторінку з якої прийшов з юзера або з find pet*/}
          <AddPetBtnCancel
            type="button"
            onClick={backStep}
            // text="Back"
            // isLink={false}
          >
            {/* <Link to={backPage}> */}
            <AddPetBtnCancelDiv>
              <ArrowLeft width="24" height="24" />
              Back
              {/* {step === 1 ? 'Cancel' : 'Back'} */}
            </AddPetBtnCancelDiv>
            {/* </Link> */}
          </AddPetBtnCancel>
        </AddPetBtnItem>
      </AddPetBtnList>
    </>
  );
};

SecondStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default SecondStepForm;
