import React from 'react';
import PropTypes from 'prop-types';
import {
  SecondStepFormDiv,
  SecondStepFormInput,
  SecondStepFormTitle,
} from './SecondStepForm.styled';
// import { TextField } from '@mui/material';

const SecondStepForm = ({ data, setData }) => {
  const handleChange = e => {
    const input = e.target.name;
    const value = e.target.value;
    setData(prev => ({ ...prev, [input]: value }));
  };

  return (
    <SecondStepFormDiv>
      {/* ----------- second step content */}
      {/* тут умова для Title of add поле в разі певних опшинів радіокнопок*/}
      {data.option !== 'pet' && (
        <SecondStepFormTitle>
          Title of add
          <SecondStepFormInput
            // id={nameRandomId}
            autoFocus
            className="inputField"
            type="text"
            placeholder="Title of add"
            name="title"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </SecondStepFormTitle>
      )}
      <SecondStepFormTitle>
        Pet's name
        <SecondStepFormInput
          // id={nameRandomId}
          autoFocus={data.option !== 'pet' ? false : true}
          className="inputField"
          type="text"
          placeholder="Type name pet"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </SecondStepFormTitle>
      <SecondStepFormTitle>
        Date of birth
        <SecondStepFormInput
          // id={nameRandomId}
          // autoFocus
          className="inputField"
          type="text"
          placeholder="Type date of birth"
          name="birth"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </SecondStepFormTitle>
      <SecondStepFormTitle>
        Type
        <SecondStepFormInput
          // id={nameRandomId}
          // autoFocus
          className="inputField"
          type="text"
          placeholder="Type of pet"
          name="kind"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </SecondStepFormTitle>
    </SecondStepFormDiv>
  );
};

SecondStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default SecondStepForm;
