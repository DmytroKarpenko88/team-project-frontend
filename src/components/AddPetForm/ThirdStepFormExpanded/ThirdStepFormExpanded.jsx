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
  ThirdStepSexDiv,
  ThirdStepSexFemaleLabel,
  ThirdStepSexInput,
  ThirdStepSexMaleLabel,
  ThirdStepSexPhotoDiv,
  ThirdStepSexTitle,
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
import { ThirdStepFormPhotoDiv } from '../ThirdStepForm/ThirdStepForm.styled';

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
    // const input = e.target.name;
    // const value = e.target.value;
    // setData(prev => ({ ...prev, [input]: value }));
    const { name, value, type, files } = e.target;
    console.log(" value:",  value)
    const fieldValue = type === 'file' ? files[0] : value;
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
        {/* sex for sell, lostFond, and in good hands*/}
        <ThirdStepSexPhotoDiv>
          {data.category !== 'pet' && (
            <div>
              <ThirdStepSexTitle>The sex</ThirdStepSexTitle>
              <ThirdStepSexDiv>
                <ThirdStepSexFemaleLabel id="sex">
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
                </ThirdStepSexFemaleLabel>
                <ThirdStepSexMaleLabel id="sex">
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
                </ThirdStepSexMaleLabel>
              </ThirdStepSexDiv>
            </div>
          )}
          {/* --- */}
          {/* label */}
          <ThirdStepFormPhotoTitle htmlFor="pet-image" data={data}>
            <ThirdStepFormPhotoDiv>
              {data.category === 'pet' || viewportWidth < 768
                ? 'Add photo'
                : 'Load the pet’s image:'}
            </ThirdStepFormPhotoDiv>
            {/* div - svg */}
            <ThirdStepFormPlus>
              {/* <Plus /> */}
              {/* img */}
              {/* {fileInputRef.current?.files[0] && <img></img>} */}
              {!data.petURL && <Plus width="30" height="30" />}
              {!!data.petURL && (
                <ThirdStepFormImgPreview
                  src={URL.createObjectURL(data.petURL)}
                  alt={data.name}
                  // alt="pet preview"
                ></ThirdStepFormImgPreview>
              )}
              
            </ThirdStepFormPlus>
            {/* input */}
            {/* -----FileInput - input */}
            <ThirdStepFormImgInput
              type="file"
              id="pet-image"
              alt="pet`s photo"
              // value={data.photo ?? ''}
              name="petURL"
              onChange={handleChange}
              // onFocus={focusHandle}
              value={imageValue}
              onBlur={() => validateField('petURL', data, setErrors)}
              accept=".jpg, .png"
              required
            />
          </ThirdStepFormPhotoTitle>
        </ThirdStepSexPhotoDiv>

        {/* location price for sell lostFond ingood hands*/}
        <div>
          {data.category !== 'pet' && (
            <>
              <ThirdStepFormTitle>
                Location
                <ThirdStepFormInput
                  type="text"
                  required
                  name="location"
                  placeholder="Type of location"
                  onChange={handleChange}
                  value={data.location}
                  onBlur={() => validateField('location', data, setErrors)}
                  className={errors.location ? 'invalid' : ''}
                />
              </ThirdStepFormTitle>
              {!!errors.location && <ErrorMessage message={errors.location} />}
            </>
          )}
          {data.category === 'sell' && (
            <>
              <ThirdStepFormTitle>
                Price
                <ThirdStepFormInput
                  type="number"
                  name="price"
                  placeholder="Type of price"
                  onChange={handleChange}
                  value={data.price}
                  onBlur={() => validateField('price', data, setErrors)}
                  className={errors.price ? 'invalid' : ''}
                  required
                />
              </ThirdStepFormTitle>
              {!!errors.price && <ErrorMessage message={errors.price} />}
            </>
          )}
          {/* ----- -------- */}
          <>
            <ThirdStepFormTitle htmlFor="describe">
              Comments
              <ThirdStepFormComments
                type="text"
                component="textarea"
                // value="comments"
                name="describe"
                placeholder="Type of pet"
                onChange={handleChange}
                // onFocus={focusHandle}
                data={data}
                step={step}
                value={data.describe}
                onBlur={() => validateField('describe', data, setErrors)}
                className={errors.describe ? 'invalid' : ''}
                // required
              />
            </ThirdStepFormTitle>
            {!!errors.describe && <ErrorMessage message={errors.describe} />}
          </>
        </div>
      </ThirdStepFormDiv>
      <AddPetBtnList>
        <AddPetBtnItem>
          <AddPetBtnNext
            type="button"
            // text="Done"
            // icon={<Paw width="24" height="24" fill="#FEF9F9" />}
            // filled={true}
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

ThirdStepFormExpanded.propTypes = {
  data: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default ThirdStepFormExpanded;
