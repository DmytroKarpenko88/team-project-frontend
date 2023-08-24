import React from 'react';
import PropTypes from 'prop-types';
// import { TextField } from '@mui/material';

const SecondStepForm = ({ data, setData }) => {
  const handleChange = e => {
    const input = e.target.name;
    const value = e.target.value;
    setData(prev => ({ ...prev, [input]: value }));
  };

  return (
    <div className="secondStep">
      {/* ----------- second step content */}
      {/* тут умова для Title of add поле в разі певних опшинів радіокнопок*/}
      {data.option !== 'pet' && (
        <label>
          Title of add
          <input
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
        </label>
      )}
      <label className="input">
        Pet's name
        <input
          // id={nameRandomId}
          autoFocus
          className="inputField"
          type="text"
          placeholder="Type name pet"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="input">
        Date of birth
        <input
          // id={nameRandomId}
          autoFocus
          className="inputField"
          type="text"
          placeholder="Type date of birth"
          name="birth"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="input">
        Type
        <input
          // id={nameRandomId}
          autoFocus
          className="inputField"
          type="text"
          placeholder="Type of pet"
          name="kind"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

SecondStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default SecondStepForm;
