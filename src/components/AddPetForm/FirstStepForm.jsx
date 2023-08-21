import React from 'react';
// import PropTypes from 'prop-types';

const FirstStepForm = props => {
  const handleChange = () => {};

  return (
    <form className="firstStep">
      {/* ----------- first step content radio btn */}
      <label>
        <input
          type="radio"
          name="option"
          value="pet"
          checked
          onChange={handleChange}
        />
        your pet
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="sell"
          checked
          onChange={handleChange}
        />
        sell
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="lostFond"
          checked
          onChange={handleChange}
        />
        lost/found
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="hands"
          checked
          onChange={handleChange}
        />
        in good hands
      </label>
    </form>
  );
};

FirstStepForm.propTypes = {};

export default FirstStepForm;
