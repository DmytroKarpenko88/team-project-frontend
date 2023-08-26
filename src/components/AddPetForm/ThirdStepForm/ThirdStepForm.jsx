import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'components/icons';
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

const ThirdStepForm = ({ data, setData }) => {
  const handleChange = e => {
    const input = e.target.name;
    const value = e.target.value;
    setData(prev => ({ ...prev, [input]: value }));
  };

  const focusHandle = e => {};

  const getphotoURL = () => {};

  return (
    <ThirdStepFormDiv>
      {/* sex for sell lostFond ingood hands*/}
      <ThirdStepSexPhotoDiv>
        {/* {data.option !== 'pet' && (
          <div>
            <ThirdStepSexTitle>The sex</ThirdStepSexTitle>
            <ThirdStepSexDiv>
              <ThirdStepSexFemaleLabel id="sex">
                <Female />
                <ThirdStepSexInput name="sex" type="radio" value="female" />
                Female
              </ThirdStepSexFemaleLabel>
              <ThirdStepSexMaleLabel id="sex">
                <Male />
                <ThirdStepSexInput name="sex" type="radio" value="male" />
                Male
              </ThirdStepSexMaleLabel>
            </ThirdStepSexDiv>
          </div>
        )} */}
        {/* --- */}
        {/* label */}
        <ThirdStepFormPhotoTitle>
          {/* Add photo prewiew on 3 stage */}
          <ThirdStepFormPhotoDiv>Load the pet's image:</ThirdStepFormPhotoDiv>
          {/* div - svg */}
          <ThirdStepFormPlus>
            <Plus />
            {/* img */}
            {/* {fileInputRef.current?.files[0] && <img></img>} */}
            <ThirdStepFormImgPreview
              src={getphotoURL()}
              alt="pet preview"
            ></ThirdStepFormImgPreview>
            {/* input */}
            <ThirdStepFormImgInput
              type="file"
              alt="pet`s photo"
              value={data.photo ?? ''}
              name="photo"
              onChange={handleChange}
              onFocus={focusHandle}
              accept="image/jpeg, image/png, image/webp, image/gif"
              required
            />
          </ThirdStepFormPlus>
        </ThirdStepFormPhotoTitle>
      </ThirdStepSexPhotoDiv>

      {/* location price for sell lostFond ingood hands*/}
      <div>
        {/* {data.option !== 'pet' && (
          <div>
            <ThirdStepFormTitle>
              Location
              <ThirdStepFormInput
                type="text"
                required
                name="location"
                placeholder="Type place of your living"
              />
            </ThirdStepFormTitle>

            <ThirdStepFormTitle>
              Price
              <ThirdStepFormInput
                type="text"
                required
                name="price"
                placeholder="How much does your pet cost?"
              />
            </ThirdStepFormTitle>
          </div>
        )} */}
        {/* ----- -------- */}
        <ThirdStepFormTitle>
          Comments
          <ThirdStepFormComments
            type="text"
            // value="comments"
            name="comments"
            placeholder="Type of pet"
            onChange={handleChange}
            onFocus={focusHandle}
            required
          />
        </ThirdStepFormTitle>
      </div>
    </ThirdStepFormDiv>
  );
};

ThirdStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default ThirdStepForm;
