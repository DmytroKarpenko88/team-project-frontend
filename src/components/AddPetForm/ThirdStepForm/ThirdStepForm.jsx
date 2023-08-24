import React from 'react';
import PropTypes from 'prop-types';
import { Female, Male } from 'components/icons';
import {
  ThirdStepFormComments,
  ThirdStepFormDiv,
  ThirdStepFormInput,
  ThirdStepFormTitle,
} from './ThirdStepForm.styled';

const ThirdStepForm = ({ data, setData }) => {
  const handleChange = e => {
    const input = e.target.name;
    const value = e.target.value;
    setData(prev => ({ ...prev, [input]: value }));
  };

  const focusHandle = e => {};

  return (
    <ThirdStepFormDiv>
      {/* sex for sell lostFond ingood hands*/}
      {data.option !== 'pet' && (
        <div>
          <h3>The sex</h3>
          <label id="sex">
            <Female />
            <input name="sex" type="radio" value="female" />
            Female
          </label>
          <label id="sex">
            <Male />
            <input name="sex" type="radio" value="male" />
            Male
          </label>
        </div>
      )}
      {/* --- */}
      <ThirdStepFormTitle>
        {/* Add photo prewiew on 3 stage */}
        Load the pet's image:
        <ThirdStepFormInput
          type="file"
          alt="pet`s photo"
          value={data.photo ?? ''}
          name="photo"
          onChange={handleChange}
          onFocus={focusHandle}
          accept="image/jpeg, image/png, image/webp, image/gif"
          required
        />
        <img src="" alt="pet preview"></img>
      </ThirdStepFormTitle>
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
          placeholder="Type of pet"
          value="comments"
          name="comments"
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
