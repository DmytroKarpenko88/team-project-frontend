import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, Paw, Plus } from 'components/icons';
import {
  ThirdStepFormComments,
  ThirdStepFormDiv,
  ThirdStepFormImgInput,
  ThirdStepFormImgPreview,
  ThirdStepFormPhotoDiv,
  ThirdStepFormPhotoTitle,
  ThirdStepFormPlus,
  ThirdStepFormTitle,
  ThirdStepFormTitleContainer,
  ThirdStepSexPhotoDiv,
} from './ThirdStepForm.styled';
import {
  AddPetBtnCancel,
  AddPetBtnCancelDiv,
  AddPetBtnItem,
  AddPetBtnList,
  AddPetBtnNext,
} from '../AddPetForm.styled';
import { validateField } from '../validatePet';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ThirdStepForm = ({ data, setData, submit, backStep }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});

  const [imageValue, setImageValue] = useState('');
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const isPetPhotoFieldValid = Boolean(!errors.petURL && !data.petURL);
  const isCommentsFieldValid = Boolean(!errors.describe);
  const isLocationFieldValid = Boolean(!errors.location && !data.location);
  const isSexFieldValid = Boolean(!errors.sex && !data.sex);
  const isPriceFieldValid = Boolean(!errors.price && !data.price);

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
    console.log('fieldValue:', fieldValue);
    console.log('fieldValue:', fieldValue);

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
        <ThirdStepSexPhotoDiv>
          <ThirdStepFormPhotoTitle htmlFor="pet-image" data={data}>
            <ThirdStepFormPhotoDiv>
              {data.category === 'pet' || viewportWidth < 768
                ? 'Add photo'
                : 'Load the pet’s image:'}
            </ThirdStepFormPhotoDiv>
            <ThirdStepFormPlus>
              {!data.petURL && <Plus width="30" height="30" />}
              {!!data.petURL && (
                <ThirdStepFormImgPreview
                  src={URL.createObjectURL(data.petURL)}
                  alt={data.name}
                ></ThirdStepFormImgPreview>
              )}
            </ThirdStepFormPlus>
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
          </ThirdStepFormPhotoTitle>
        </ThirdStepSexPhotoDiv>

        <ThirdStepFormTitleContainer>
          <ThirdStepFormTitle htmlFor="describe">
            Comments
            <ThirdStepFormComments
              type="text"
              // component="textarea"
              name="describe"
              placeholder="Type of pet"
              onChange={handleChange}
              value={data.describe}
              onBlur={() => validateField('describe', data, setErrors)}
              className={errors.describe ? 'invalid' : ''}
              required
            />
          </ThirdStepFormTitle>
          {!!errors.describe && <ErrorMessage message={errors.describe} />}
        </ThirdStepFormTitleContainer>
      </ThirdStepFormDiv>
      <AddPetBtnList>
        <AddPetBtnItem>
          <AddPetBtnNext
            type="button"
            onClick={submit && (() => submit(false))}
            disabled={isDisabled}
          >
            Done
            <Paw width="24" height="24" fill="#FEF9F9" />
          </AddPetBtnNext>
        </AddPetBtnItem>

        <AddPetBtnItem>
          <AddPetBtnCancel type="button" onClick={backStep}>
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

ThirdStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default ThirdStepForm;
