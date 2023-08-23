import { ArrowLeft, Paw } from 'components/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StepTitles from './StepTitles';
import getFormBasedOnStep from './getFormBasedOnStep';
import getTitle from './getTitle';
import { AddPetFormTitle } from './AddPetForm.styled';

// import StepTitles from './stepTitles';

const AddPetForm = () => {
  // const location = useLocation();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ option: 'pet' });

  const title = getTitle(data);

  const onClick = e => {
    const btn = e.target.innerHTML;

    if (btn.includes('Next')) {
      if (step === 1) return setStep(2);
      if (step === 2) return setStep(3);
    } else if (btn.includes('Done')) {
      e.preventDefault();
      // server request
      return;
    } else if (btn.includes('Back')) {
      return setStep(prev => prev - 1);
    } else {
      return;
    }
  };

  // console.log(location); //{pathname: '/add-pet', search: '', hash: '', state: null, key: 'default'}
  const backPage = step === 1 ? '/user' : '';

  return (
    <AddPetForm onClick={onClick}>
      {/* --------------------- title of form ---------------------- */}
      <div>
        <AddPetFormTitle>
          {/* рендеримо відповідний заголовок форми Add pet */}
          {title}
        </AddPetFormTitle>
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
            {step === 3 ? 'Done' : 'Next'}
            <Paw width="24" height="24" />
          </button>
        </li>

        <li>
          {/* повернути на сторінку з якої прийшов з юзера або з find pet*/}
          <button type="button">
            <Link to={backPage}>
              <ArrowLeft width="24" height="24" />
              {step === 1 ? 'Cancel' : 'Back'}
            </Link>
          </button>
        </li>
      </ul>
    </AddPetForm>
  );
};

export default AddPetForm;
