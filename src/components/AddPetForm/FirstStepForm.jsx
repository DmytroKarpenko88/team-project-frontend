import React from 'react';
import PropTypes from 'prop-types';

const FirstStepForm = ({ data, setData }) => {
  const handleChange = e => {
    const value = e.target.value;
    setData(prev => ({ ...prev, option: value }));
  };
  const { option } = data;

  return (
    <div className="firstStep">
      {/* ----------- first step content radio btn ------------- */}
      <label>
        <input
          type="radio"
          value="pet"
          checked={option === 'pet'}
          name="pet"
          onChange={handleChange}
        />
        your pet
      </label>
      <label>
        <input
          type="radio"
          value="sell"
          checked={option === 'sell'}
          name="sell"
          onChange={handleChange}
        />
        sell
      </label>
      <label>
        <input
          type="radio"
          value="lostFound"
          checked={option === 'lostFound'}
          name="lostFound"
          onChange={handleChange}
        />
        lost/found
      </label>
      <label>
        <input
          type="radio"
          value="hands"
          checked={option === 'hands'}
          name="hands"
          onChange={handleChange}
        />
        in good hands
      </label>
    </div>
  );
};

FirstStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default FirstStepForm;
