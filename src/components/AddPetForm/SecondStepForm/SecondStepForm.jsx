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
  const isBreedFieldValid = Boolean(!errors.breed && !!data.breed);
  const isTitleFieldValid = Boolean(!errors.title && !!data.title);

  useEffect(() => {
    if (data.option === 'pet') {
      setIsDisabled(
        !(isNameFieldValid && isBirthdayFieldValid && isBreedFieldValid)
      );
    }

    if (data.option !== 'pet') {
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
    data.option,
    isBirthdayFieldValid,
    isBreedFieldValid,
    isNameFieldValid,
    isTitleFieldValid,
  ]);

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleChange = e => {
    // const input = e.target.name;
    // const value = e.target.value;
    // setData(prev => ({ ...prev, [input]: value }));

    const { name, value } = e.target;

    setErrors(prevState => ({ ...prevState, [name]: '' }));

    const inputValue =
      name === 'birthday'
        ? new Date(value).toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : value;

    setData(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <>
      <SecondStepFormDiv>
        {data.option !== 'pet' && (
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
                required
              />
            </SecondStepFormTitle>
            {!!errors.title && <ErrorMessage message={errors.title} />}
          </>
        )}
        <>
          <SecondStepFormTitle htmlFor="name">
            Pet's name
            <SecondStepFormInput
              autoFocus={data.option !== 'pet' ? false : true}
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
              type="date"
              placeholder="Type date of birth"
              name="birthday"
              max={maxDate}
              onChange={handleChange}
              data-pattern="**.**.****"
              value={data.birthday.split('.').reverse().join('-')}
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
              name="breed"
              onChange={handleChange}
              value={data.breed}
              onBlur={() => validateField('breed', data, setErrors)}
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
            filled={false}
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
            isLink={false}
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
