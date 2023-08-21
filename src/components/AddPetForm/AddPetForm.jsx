import React from 'react'; // { useState }
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

// import StepTitles from './stepTitles';

function AddPetForm() {
  // const [step, setStep] = useState(1);
  // const [data, setData] = useState({ option: 'pet' });

  const insertForm = () => {};
  // const title = getTitle(data);

  // if () {
  //   return setStep(2);
  // }

  return (
    <form>
      <div>
        <h2 className="title">
          Add pet
          {/* рендеримо відповідний заголовок форми
          {title} */}
        </h2>
      </div>
      <ul>
        <li>
          {/* 
          передаємо крок і рендеримо кольори опцій 
          <StepTitles step={step} /> 
          */}
          Choose option
        </li>
        <li>Personal details</li>
        <li>More info</li>
      </ul>

      {/* ----------- first step content */}

      <form>
        <label>
          <input type="radio" name="option" value="red" checked />
          your pet
        </label>
        <label>
          <input type="radio" name="option" value="green" />
          sell
        </label>
        <label>
          <input type="radio" name="option" value="green" />
          lost/found
        </label>
        <label>
          <input type="radio" name="option" value="green" />
          in good hands
        </label>
      </form>

      {/* ----------- second step content */}

      <form>
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

        <Button
          className="inputBtn"
          variant="contained"
          type="submit"
          aria-label="Add contact"
        >
          Add contact
        </Button>
      </form>

      {/* ----------- third step content */}

      <div className="thirdStep">
        <label id="photo">
          Add photo
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
      </div>

      {/* ----------- */}

      <ul>
        <li>
          <button type="button" onClick={() => insertForm()}>
            Next
            {/* <svg class="icon" width="32" height="32">
              <use href="../../icons/paw1.svg"></use>
            </svg> */}
          </button>
        </li>

        <li>
          {/* повернути на сторінку з якої прийшов */}
          <Link to="/user">Cancel or Back</Link>
        </li>
      </ul>
    </form>
  );
}

export default AddPetForm;
