import { ArrowLeft, Paw } from 'components/icons';
import React from 'react'; // { useState }
import { Link } from 'react-router-dom';

// import StepTitles from './stepTitles';

function AddPetForm() {
  // const [step, setStep] = useState(1);
  // const [data, setData] = useState({ option: 'pet' });

  const insertForm = () => {};
  // const title = getTitle(data);

  // if (click on btn next) {
  //   return setStep(2);
  // }

  return (
    <form>
      {/* --------------------- title of form ---------------------- */}

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

      {/* ----------- content for form based on step -------------- */}
      <getFormBasedOnStep
      // step={step} data={data}
      />

      {/* ------------------------ buttons ------------------------ */}
      <ul>
        <li>
          <button type="button" onClick={() => insertForm()}>
            Next or Done
            <Paw />
            {/* <svg class="icon" width="32" height="32">
              <use href="../../icons/paw1.svg"></use>
            </svg> */}
          </button>
        </li>

        <li>
          {/* повернути на сторінку з якої прийшов */}
          <Link to="/user">
            <ArrowLeft /> Cancel or Back
          </Link>
        </li>
      </ul>
    </form>
  );
}

export default AddPetForm;
