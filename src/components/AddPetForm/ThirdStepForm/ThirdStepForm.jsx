import React from 'react';
import PropTypes from 'prop-types';
import { Female, Male, Plus } from 'components/icons';
import {
  ThirdStepFormComments,
  ThirdStepFormDiv,
  ThirdStepFormImgInput,
  ThirdStepFormImgPreview,
  ThirdStepFormInput,
  ThirdStepFormPhotoTitle,
  ThirdStepFormTitle,
  ThirdStepSexDiv,
  ThirdStepSexFemaleLabel,
  ThirdStepSexInput,
  ThirdStepSexMaleLabel,
  ThirdStepSexTitle,
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
      {data.option !== 'pet' && (
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
      )}
      {/* --- */}
      <ThirdStepFormPhotoTitle>
        {/* Add photo prewiew on 3 stage */}
        Load the pet's image:
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
        <ThirdStepFormImgPreview
          src={getphotoURL()}
          alt="pet preview"
        ></ThirdStepFormImgPreview>
        <Plus />
      </ThirdStepFormPhotoTitle>
      {/* location price for sell lostFond ingood hands*/}
      {data.option !== 'pet' && (
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
      )}
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
    </ThirdStepFormDiv>
  );
};

ThirdStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default ThirdStepForm;
