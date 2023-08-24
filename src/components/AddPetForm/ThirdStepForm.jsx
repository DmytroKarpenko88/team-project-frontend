import React from 'react';
import PropTypes from 'prop-types';
import { Female, Male } from 'components/icons';

const ThirdStepForm = ({ data, setData }) => {
  const handleChange = e => {
    const input = e.target.name;
    const value = e.target.value;
    setData(prev => ({ ...prev, [input]: value }));
  };

  const focusHandle = e => {};

  return (
    <div>
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
      <label id="photo">
        {/* Add photo prewiew on 3 stage */}
        Load the pet's image:
        <input
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
      </label>
      {/* location price for sell lostFond ingood hands*/}
      {data.option !== 'pet' && (
        <div>
          <label id="location">
            Location
            <input
              type="text"
              required
              name="location"
              placeholder="Type place of your living"
            />
          </label>

          <label id="price">
            Price
            <input
              type="text"
              required
              name="price"
              placeholder="How much does your pet cost?"
            />
          </label>
        </div>
      )}
      {/* ----- -------- */}
      <label id="comments">
        Comments
        <textarea
          type="text"
          placeholder="Type of pet"
          value="comments"
          name="comments"
          onChange={handleChange}
          onFocus={focusHandle}
          required
        />
      </label>
    </div>
  );
};

ThirdStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default ThirdStepForm;
