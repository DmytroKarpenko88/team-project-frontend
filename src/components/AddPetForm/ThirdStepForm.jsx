import React from 'react';
// import PropTypes from 'prop-types'

const ThirdStepForm = props => {
  return (
    <form className="thirdStep">
      <label id="photo">
        Load the pet's image:
        {/* Add photo */}
        <input type="file" name="photo" alt="pet`s photo" required />
        <img alt="pet preview"></img>
      </label>

      <label id="comments">
        Comments
        <textarea
          type="text"
          name="comments"
          placeholder="Field is required"
          required
        />
      </label>
    </form>
  );
};

ThirdStepForm.propTypes = {};

export default ThirdStepForm;
