import React from 'react';
// import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const SecondStepForm = props => {
  return (
    <form className="secondStep">
      {/* ----------- second step content */}
      {/* тут умова для Title of add поле в разі певних опшинів радіокнопок*/}
      <label>
        Title of add
        <TextField
          // <input> tag
          // id={nameRandomId}
          autoFocus
          className="inputField"
          type="text"
          placeholder="Title of add"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="input">
        Pet's name
        <TextField
          // <input> tag
          // id={nameRandomId}
          autoFocus
          className="inputField"
          type="text"
          placeholder="Type name pet"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="input">
        Date of birth
        <TextField
          // <input> tag
          // id={nameRandomId}
          autoFocus
          className="inputField"
          type="text"
          placeholder="Type date of birth"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="input">
        Type
        <TextField
          // <input> tag
          // id={nameRandomId}
          autoFocus
          className="inputField"
          type="text"
          placeholder="Type of pet"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </form>
  );
};

SecondStepForm.propTypes = {};

export default SecondStepForm;
