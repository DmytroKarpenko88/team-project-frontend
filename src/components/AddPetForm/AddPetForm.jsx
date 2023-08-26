import { ArrowLeft, Paw } from 'components/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StepTitles from './StepTitles/StepTitles';
import getFormBasedOnStep from './getFormBasedOnStep';
import getTitle from './getTitle';
import {
  AddPetFormTitle,
  AddPetContainerForm,
  AddPetBtnList,
  AddPetBtnItem,
  AddPetBtnNext,
  AddPetBtnCancel,
  AddPetBtnCancelDiv,
} from './AddPetForm.styled';
import { AddPetDiv } from 'pages/AddPet/AddPet.styled';

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
  console.log(data);
  // console.log(step);
  // console.log(location); //{pathname: '/add-pet', search: '', hash: '', state: null, key: 'default'}
  const backPage = step === 1 ? '/user' : '';

  return (
    <AddPetDiv data={data} step={step}>
      <AddPetContainerForm onClick={onClick}>
        {/* --------------------- title of form ---------------------- */}
        <AddPetFormTitle>{title}</AddPetFormTitle>
        {/* передаємо крок і рендеримо кольори опцій у відповідності 
        Choose option Personal details Personal details*/}
        <StepTitles step={step} />

        {/* ----------- content for form based on step -------------- */}
        {getFormBasedOnStep(step, data, setData)}

        {/* ------------------------ buttons ------------------------ */}
        <AddPetBtnList>
          <AddPetBtnItem>
            <AddPetBtnNext type="button">
              {step === 3 ? 'Done' : 'Next'}
              <Paw width="24" height="24" fill="#FEF9F9" />
            </AddPetBtnNext>
          </AddPetBtnItem>

          <AddPetBtnItem>
            {/* повернути на сторінку з якої прийшов з юзера або з find pet*/}
            <AddPetBtnCancel type="button">
              <Link to={backPage}>
                <AddPetBtnCancelDiv>
                  <ArrowLeft width="24" height="24" />
                  {step === 1 ? 'Cancel' : 'Back'}
                </AddPetBtnCancelDiv>
              </Link>
            </AddPetBtnCancel>
          </AddPetBtnItem>
        </AddPetBtnList>
      </AddPetContainerForm>
    </AddPetDiv>
  );
};

export default AddPetForm;
