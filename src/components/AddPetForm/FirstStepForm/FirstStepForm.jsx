import React from 'react';
import PropTypes from 'prop-types';
import {
  FirstStepFormItemInput,
  FirstStepFormItemLabel,
  FirstStepFormList,
} from './FirstStepForm.styled';

const FirstStepForm = ({ data, setData }) => {
  const handleChange = e => {
    const value = e.target.value;
    console.log("value:", value)
    setData(prev => ({ ...prev, option: value }));
  };
  const { option } = data;

  return (
    <FirstStepFormList>
      {/* ----------- first step content radio btn ------------- */}
      <FirstStepFormItemLabel>
        <FirstStepFormItemInput
          autoFocus="on"
          type="radio"
          value="pet"
          checked={option === 'pet'}
          name="pet"
          onChange={handleChange}
        />
        your pet
      </FirstStepFormItemLabel>
      <FirstStepFormItemLabel>
        <FirstStepFormItemInput
          type="radio"
          value="sell"
          checked={option === 'sell'}
          name="sell"
          onChange={handleChange}
        />
        sell
      </FirstStepFormItemLabel>
      <FirstStepFormItemLabel>
        <FirstStepFormItemInput
          type="radio"
          value="lostFound"
          checked={option === 'lostFound'}
          name="lostFound"
          onChange={handleChange}
        />
        lost/found
      </FirstStepFormItemLabel>
      <FirstStepFormItemLabel>
        <FirstStepFormItemInput
          type="radio"
          value="hands"
          checked={option === 'hands'}
          name="hands"
          onChange={handleChange}
        />
        in good hands
      </FirstStepFormItemLabel>
    </FirstStepFormList>
  );
};

FirstStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default FirstStepForm;
