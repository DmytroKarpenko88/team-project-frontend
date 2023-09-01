import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { theme } from 'styles';
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
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setErrors(prevState => ({ ...prevState, [name]: '' }));
    let inputValue = value;

    if (name === 'birthday') {
      const [day, month, year] = value.split('-').reverse();
      if (day && month && year) {
        inputValue = `${year}-${month}-${day}`;
      }
    }

    setData(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <>
      <SecondStepFormDiv >
        {data.category !== 'pet' && (
          <>
            <SecondStepFormTitle htmlFor="title">
              Title of add
              <SecondStepFormInput
              style={{borderColor: `${!errors.title ? `${theme.colors.blue}`: !isTitleFieldValid ? `${theme.colors.red}` : `${theme.colors.green}`}`}}
                // autoFocus
                type="text"
                name="title"
                placeholder="Title of add"
                value={data.title}
                onChange={handleChange}
                onBlur={() => validateField('title', data, setErrors)}
                className={errors.title ? 'invalid' : ''}
              />
              {!!errors.title && <ErrorMessage message={errors.title} />}
            </SecondStepFormTitle>
            
          </>
        )}

        <>
          <SecondStepFormTitle htmlFor="name">
            Pet's name
            <SecondStepFormInput
              type="text"
              style={{borderColor: !errors.name  ? `${theme.colors.blue}` : isNameFieldValid ? null : `${theme.colors.red}`}}
              placeholder="Type name pet"
              name="name"
              onChange={handleChange}
              value={data.name}
              onBlur={() => validateField('name', data, setErrors)}
              className={errors.title ? 'invalid' : ''}
              required
            />
            {!!errors.name && <ErrorMessage message={errors.name} />}
          </SecondStepFormTitle>
        </>

        <>
          <SecondStepFormTitle htmlFor="birthday">
            Date of birth
            <SecondStepFormInput
            style={{borderColor: `${!errors.birthday ? `${theme.colors.blue}`: !isBirthdayFieldValid ? `${theme.colors.red}` : `${theme.colors.green}`}`}}
              type="data"
              placeholder="Type date of birth in format DD-MM-YYYY"
              name="birthday"
              max={maxDate}
              onChange={handleChange}
              value={data.birthday.split('.').join('-')} 
              onBlur={() => validateField('birthday', data, setErrors)}
              className={errors.birthday ? 'invalid' : ''}
              required
            />
            {!!errors.birthday && <ErrorMessage message={errors.birthday} />}
          </SecondStepFormTitle>
        </>

        <>
          <SecondStepFormTitle htmlFor="type">
            Type
            <SecondStepFormInput
              type="text"
              placeholder="Type of pet"
              style={{borderColor: !errors.type  ? `${theme.colors.blue}` : isBreedFieldValid ? null : `${theme.colors.red}`}}
              name="type"
              onChange={handleChange}
              value={data.type}
              onBlur={() => validateField('type', data, setErrors)}
              className={errors.type ? 'invalid' : ''}
              required
            />
            {!!errors.type && <ErrorMessage message={errors.type} />}
          </SecondStepFormTitle>
        </>
      </SecondStepFormDiv>

      <AddPetBtnList>
        <AddPetBtnItem>
          <AddPetBtnNext
            type="button"
            onClick={nextStep && (() => nextStep(false))}
            disabled={isDisabled}
          >
            Next
            <Paw width="24" height="24" fill="#FEF9F9" />
          </AddPetBtnNext>
        </AddPetBtnItem>

        <AddPetBtnItem>
          {/* повернути на сторінку з якої прийшов з юзера або з find pet*/}
          <AddPetBtnCancel
            type="button"
            onClick={backStep}
          >
            <AddPetBtnCancelDiv>
              <ArrowLeft width="24" height="24" />
              Back
            </AddPetBtnCancelDiv>
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
