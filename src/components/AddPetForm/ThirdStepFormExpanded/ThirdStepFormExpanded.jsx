import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, Female, Male, Paw, Plus } from 'components/icons';
import {
  ThirdStepFormComments,
  ThirdStepFormDiv,
  ThirdStepFormImgInput,
  ThirdStepFormImgPreview,
  ThirdStepFormInput,
  ThirdStepFormPhotoTitle,
  ThirdStepFormPlus,
  ThirdStepFormTitle,
  ThirdStepSexContainer,
  ThirdStepSexDiv,
  // ThirdStepSexFemaleLabel,
  ThirdStepSexInput,
  ThirdStepSexLabel,
  // ThirdStepSexMaleLabel,
  ThirdStepSexPhotoDiv,
  ThirdStepSexTitle,
  ThirdStepFormPhotoDiv,
  ThirdStepFormContainer,
  ThirdStepFormTitleContainer,
} from './ThirdStepFormExpanded.styled';
import {
  AddPetBtnCancel,
  AddPetBtnCancelDiv,
  AddPetBtnItem,
  AddPetBtnList,
  AddPetBtnNext,
} from '../AddPetForm.styled';
import { validateField } from '../validatePet';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { theme } from 'styles';

const ThirdStepFormExpanded = ({ data, setData, step, submit, backStep }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [imageValue, setImageValue] = useState('');
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const isPetPhotoFieldValid = Boolean(!errors.petURL && !!data.petURL);
  const isCommentsFieldValid = Boolean(!errors.describe);
  const isLocationFieldValid = Boolean(!errors.location && !!data.location);
  const isSexFieldValid = Boolean(!errors.sex && !!data.sex);
  const isPriceFieldValid = Boolean(!errors.price && !!data.price);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (data.category === 'sell') {
      setIsDisabled(
        !(
          isPetPhotoFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isPriceFieldValid &&
          isCommentsFieldValid
        )
      );
    }
    if (data.category === 'pet') {
      setIsDisabled(!(isPetPhotoFieldValid && isCommentsFieldValid));
    } else {
      setIsDisabled(
        !(
          isPetPhotoFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isCommentsFieldValid
        )
      );
    }
  }, [
    errors,
    data.category,
    isCommentsFieldValid,
    isLocationFieldValid,
    isPetPhotoFieldValid,
    isPriceFieldValid,
    isSexFieldValid,
  ]);

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === 'file' ? files[0] : value;


    setErrors(prevState => ({ ...prevState, [name]: '' }));

    if (type === 'file') {
      setImageValue(value);
    }

    setData(prevState => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  return (
    <>
      <ThirdStepFormDiv>
        {/* sex for sell, lostFond, and in good hands*/}
        <ThirdStepSexPhotoDiv>
          {data.category !== 'pet' && (
            <ThirdStepSexContainer>
              <ThirdStepSexTitle>The sex</ThirdStepSexTitle>
              <ThirdStepSexDiv>
                <ThirdStepSexLabel
                  value="female"
                  active={data.sex === 'female'}
                  id="sex"
                >
                  <Female />
                  <ThirdStepSexInput
                    name="sex"
                    type="radio"
                    value="female"
                    id="female"
                    onChange={handleChange}
                    checked={data.sex === 'female'}
                    onBlur={() => validateField('sex', data, setErrors)}
                  />
                  Female
                </ThirdStepSexLabel>
                <ThirdStepSexLabel
                  value="male"
                  active={data.sex === 'male'}
                  id="sex"
                >
                  <Male />
                  <ThirdStepSexInput
                    name="sex"
                    type="radio"
                    value="male"
                    id="male"
                    onChange={handleChange}
                    checked={data.sex === 'male'}
                    onBlur={() => validateField('sex', data, setErrors)}
                  />
                  Male
                </ThirdStepSexLabel>
              </ThirdStepSexDiv>
            </ThirdStepSexContainer>
          )}
          {/* --- */}
          {/* label */}
          <ThirdStepFormPhotoTitle
            htmlFor="pet-image"
            option={data.category}
            data={data}
            step={step}
          >
            <ThirdStepFormPhotoDiv>
              {data.category === 'pet' || viewportWidth < 768
                ? 'Add photo'
                : 'Load the pet’s image:'}
            </ThirdStepFormPhotoDiv>
            {/* div - svg */}
            <ThirdStepFormPlus>
              {!data.petURL && <Plus width="30" height="30" />}
              {!!data.petURL && (
                <ThirdStepFormImgPreview
                  src={URL.createObjectURL(data.petURL)}
                  alt={data.name}
                ></ThirdStepFormImgPreview>
              )}
            </ThirdStepFormPlus>
            {/* input */}
            {/* -----FileInput - input */}
            <ThirdStepFormImgInput
              type="file"
              id="pet-image"
              alt="pet`s photo"
              name="petURL"
              onChange={handleChange}
              value={imageValue}
              onBlur={() => validateField('petURL', data, setErrors)}
              accept=".jpg, .png"
              required
            />
            {!!errors.petURL && <ErrorMessage message={errors.petURL} />}
          </ThirdStepFormPhotoTitle>
        </ThirdStepSexPhotoDiv>

        {/* location price for sell lostFond ingood hands*/}
        <ThirdStepFormContainer>
          {data.category !== 'pet' && (
            <>
              <ThirdStepFormTitle>
                Location
                <ThirdStepFormInput
                  style={{borderColor: `${!errors.location ? `${theme.colors.blue}`: !isLocationFieldValid ? `${theme.colors.red}` : `${theme.colors.green}`}`}}
                  type="text"
                  required
                  name="location"
                  placeholder="Type of location"
                  onChange={handleChange}
                  value={data.location}
                  onBlur={() => validateField('location', data, setErrors)}
                  className={errors.location ? 'invalid' : ''}
                />
                {!!errors.location && <ErrorMessage message={errors.location} />}
              </ThirdStepFormTitle>
              
            </>
          )}
          {data.category === 'sell' && (
            <>
              <ThirdStepFormTitle>
                Price
                <ThirdStepFormInput
                style={{borderColor: `${!errors.price? `${theme.colors.blue}`: !isPriceFieldValid ? `${theme.colors.red}` : `${theme.colors.green}`}`}}
                  type="number"
                  name="price"
                  placeholder="Type of price"
                  onChange={handleChange}
                  value={data.price}
                  onBlur={() => validateField('price', data, setErrors)}
                  className={errors.price ? 'invalid' : ''}
                  required
                />
                {!!errors.price && <ErrorMessage  message={errors.price} />}
              </ThirdStepFormTitle>
              
            </>
          )}
          {/* ----- -------- */}
          <ThirdStepFormTitleContainer>
            <ThirdStepFormTitle htmlFor="describe">
              Comments
              <ThirdStepFormComments
                type="text"
                style={{borderColor: `${!errors.describe? `${theme.colors.blue}`: !isCommentsFieldValid ? `${theme.colors.red}` : `${theme.colors.green}`}`}}
                component="textarea"
                name="describe"
                placeholder="Type of pet"
                onChange={handleChange}
                data={data}
                step={step}
                value={data.describe}
                onBlur={() => validateField('describe', data, setErrors)}
                className={errors.describe ? 'invalid' : ''}
                required
              />
              {!!errors.describe && <ErrorMessage message={errors.describe} />}
            </ThirdStepFormTitle>
            
          </ThirdStepFormTitleContainer>
        </ThirdStepFormContainer>
      </ThirdStepFormDiv>
      <AddPetBtnList>
        <AddPetBtnItem>
          <AddPetBtnNext
            type="button"
            onClick={submit && (() => submit(false))}
            disabled={isDisabled}
          >
            Done
            {/* {step === 3 ? 'Done' : 'Next'} */}
            <Paw width="24" height="24" fill="#FEF9F9" />
          </AddPetBtnNext>
        </AddPetBtnItem>

        <AddPetBtnItem>
          {/* повернути на сторінку з якої прийшов з юзера або з find pet*/}
          <AddPetBtnCancel
            type="button"
            onClick={backStep}
          >
            {/* <Link to={backPage}> */}
            <AddPetBtnCancelDiv>
              <ArrowLeft width="24" height="24" />
              Back
              {/* {step === 1 ? 'Cancel' : 'Back'} */}
            </AddPetBtnCancelDiv>
          </AddPetBtnCancel>
        </AddPetBtnItem>
      </AddPetBtnList>
    </>
  );
};

ThirdStepFormExpanded.propTypes = {
  data: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default ThirdStepFormExpanded;
