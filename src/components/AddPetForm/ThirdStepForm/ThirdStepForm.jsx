import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, Paw, Plus } from 'components/icons';
import {
  ThirdStepFormComments,
  ThirdStepFormDiv,
  ThirdStepFormImgInput,
  ThirdStepFormImgPreview,
  // ThirdStepFormInput,
  ThirdStepFormPhotoDiv,
  ThirdStepFormPhotoTitle,
  ThirdStepFormPlus,
  ThirdStepFormTitle,
  // ThirdStepSexDiv,
  // ThirdStepSexFemaleLabel,
  // ThirdStepSexInput,
  // ThirdStepSexMaleLabel,
  ThirdStepSexPhotoDiv,
  // ThirdStepSexTitle,
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
  // console.log("isPetPhotoFieldValid:", isPetPhotoFieldValid)
  const isCommentsFieldValid = Boolean(!errors.describe);
  // console.log("isCommentsFieldValid:", isCommentsFieldValid)
  const isLocationFieldValid = Boolean(!errors.location && !data.location);
  // console.log("isLocationFieldValid:", isLocationFieldValid)
  const isSexFieldValid = Boolean(!errors.sex && !data.sex);
  // console.log("isSexFieldValid:", isSexFieldValid)
  const isPriceFieldValid = Boolean(!errors.price && !data.price);
  // console.log("isPriceFieldValid:", isPriceFieldValid)

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
        {/* sex for sell lostFond ingood hands*/}
        <ThirdStepSexPhotoDiv>
          <ThirdStepFormPhotoTitle htmlFor="pet-image" data={data}>
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
                  // alt="pet preview"
                ></ThirdStepFormImgPreview>
              )}
            </ThirdStepFormPlus>
            {/* input */}
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
          <>
            <ThirdStepFormTitle htmlFor="describe">
              Comments
              <ThirdStepFormComments
                type="text"
                component="textarea"
                name="describe"
                placeholder="Type of pet"
                onChange={handleChange}
                // onFocus={focusHandle}
                value={data.describe}
                onBlur={() => validateField('describe', data, setErrors)}
                className={errors.describe ? 'invalid' : ''}
                required
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

ThirdStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default ThirdStepForm;
