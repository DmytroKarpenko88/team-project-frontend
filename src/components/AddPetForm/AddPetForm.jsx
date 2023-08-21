import PropTypes from 'prop-types';

import { ArrowLeft, Paw } from 'components/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StepTitles from './StepTitles';
import getFormBasedOnStep from './getFormBasedOnStep';
import getTitle from './getTitle';

// import StepTitles from './stepTitles';

const AddPetForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ option: 'pet' });

  // console.log('data', data);
  // console.log('setData', setData);

  const title = getTitle(data);

  const onClick = e => {
    const btn = e.target.innerHTML;

    console.log(e);
    console.log(btn);

    if (btn.includes('Next')) {
      return setStep(2);
    }
  };

  return (
    <form onClick={onClick}>
      {/* --------------------- title of form ---------------------- */}

      <div>
        <h2 className="title">
          {/* рендеримо відповідний заголовок форми */}
          {/* Add pet */}
          {title}
        </h2>
        {/* передаємо крок і рендеримо кольори опцій у відповідності 
        Choose option Personal details Personal details*/}
        <StepTitles step={step} />
      </div>

      {/* ----------- content for form based on step -------------- */}
      {getFormBasedOnStep(step, data, setData)}

      {/* ------------------------ buttons ------------------------ */}
      <ul>
        <li>
          <button type="button">
            Next or Done
            <Paw />
          </button>
        </li>

        <li>
          {/* повернути на сторінку з якої прийшов з юзера або з find pet*/}
          <Link to="/user">
            <ArrowLeft /> Cancel or Back
          </Link>
        </li>
      </ul>
    </form>
  );
};

AddPetForm.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
};

export default AddPetForm;
