// import { ArrowLeft, Paw } from 'components/icons';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StepTitles from './StepTitles/StepTitles';
// import getFormBasedOnStep from './getFormBasedOnStep';
import getTitle from './getTitle';
import {
  AddPetDiv,
  AddPetFormTitle,
  AddPetContainerForm,
  // AddPetBtnList,
  // AddPetBtnItem,
  // AddPetBtnNext,
  // AddPetBtnCancel,
  // AddPetBtnCancelDiv,
} from './AddPetForm.styled';
import { Formik } from 'formik';
import { validatePetSchema } from './validatePet';
import { addNotice } from 'redux/notices/notices-operations';
import { useDispatch, useSelector } from 'react-redux';
import FirstStepForm from './FirstStepForm/FirstStepForm';
import SecondStepForm from './SecondStepForm/SecondStepForm';
import ThirdStepFormExpanded from './ThirdStepFormExpanded/ThirdStepFormExpanded';
import ThirdStepForm from './ThirdStepForm/ThirdStepForm';
import { selectIsLoading } from 'redux/auth/auth-selectors';
import { selectNoticesIsLoading } from 'redux/notices/notices-selectors';
import { ModalAddPet } from 'components/Modals';

const AddPetForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAddMyPetLoading = useSelector(selectIsLoading);
  const isAddPetLoading = useSelector(selectNoticesIsLoading);
  const isLoading = isAddMyPetLoading || isAddPetLoading;

  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    option: 'pet', //pet
    name: '',
    title: '',
    birthday: '',
    breed: '',
    location: '',
    comments: '',
    petPhoto: null,
    sex: '',
    price: 0,
  });

  const title = getTitle(data);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  // const onClick = e => {
  //   const btn = e.target.innerHTML;

  //   if (btn.includes('Next')) {
  //     if (step === 1) return setStep(2);
  //     if (step === 2) return setStep(3);
  //   } else if (btn.includes('Done')) {
  //     e.preventDefault();
  //     // server request
  //     return;
  //   } else if (btn.includes('Back')) {
  //     return setStep(prev => prev - 1);
  //   } else {
  //     return;
  //   }
  // };

  const handleNextClick = e => {
    setStep(prevState => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  const handleSubmit = async value => {
    if (!data.option) return;

    const newFormData = new FormData();

    newFormData.append('name', data.name);
    newFormData.append('birthday', data.birthday);
    newFormData.append('breed', data.breed);
    newFormData.append('pets-photo', data.petPhoto);

    if (data.comments) {
      newFormData.append('comments', data.comments);
    }

    if (data.option === 'pet') {
      // dispatch(addMyPet(newFormData));
      toggleModal();
      return;
    }

    newFormData.append('titleOfAdd', data.title);
    newFormData.append('sex', data.sex);
    newFormData.append('location', data.location);

    if (data.option === 'lostFound') {
      dispatch(addNotice({ option: 'lostFound', newFormData }));
      toggleModal();
      return;
    }

    if (data.option === 'hands') {
      dispatch(addNotice({ option: 'in-good-hands', newFormData }));
      toggleModal();
      return;
    }

    newFormData.append('price', data.price);

    if (data.option === 'sell') {
      dispatch(addNotice({ option: data.option, newFormData }));
      toggleModal();
    }
  };

  // console.log(location); //{pathname: '/add-pet', search: '', hash: '', state: null, key: 'default'}
  const backPage = step === 1 ? location.state?.from ?? '/user' : '';
  // console.log('data:', data);
  // console.log('data.option:', data.option);
  return (
    <AddPetDiv data={data} step={step}>
      <Formik
        initialValues={data}
        validationSchema={validatePetSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {() => (
          <AddPetContainerForm
          // onClick={onClick}
          >
            <AddPetFormTitle>{title}</AddPetFormTitle>
            <StepTitles step={step} />
            {/* {getFormBasedOnStep(step, data, setData)} */}
            {step === 1 && (
              <FirstStepForm
                data={data}
                setData={setData}
                nextStep={handleNextClick}
                cancel={backPage}
              />
            )}
            {step === 2 && (
              <SecondStepForm
                data={data}
                setData={setData}
                nextStep={handleNextClick}
                backStep={handlePrevClick}
              />
            )}
            {step === 3 && data.option !== 'pet' ? (
              <ThirdStepFormExpanded
                data={data}
                step={step}
                setData={setData}
                backStep={handlePrevClick}
                submit={handleSubmit}
              />
            ) : (
              step === 3 && (
                <ThirdStepForm
                  data={data}
                  step={step}
                  setData={setData}
                  backStep={handlePrevClick}
                  submit={handleSubmit}
                />
              )
            )}

            {/* <AddPetBtnList>
              <AddPetBtnItem>
                <AddPetBtnNext type="button">
                  {step === 3 ? 'Done' : 'Next'}
                  <Paw width="24" height="24" fill="#FEF9F9" />
                </AddPetBtnNext>
              </AddPetBtnItem>

              <AddPetBtnItem>
                <AddPetBtnCancel type="button">
                  <Link to={backPage}>
                    <AddPetBtnCancelDiv>
                      <ArrowLeft width="24" height="24" />
                      {step === 1 ? 'Cancel' : 'Back'}
                    </AddPetBtnCancelDiv>
                  </Link>
                </AddPetBtnCancel>
              </AddPetBtnItem>
            </AddPetBtnList> */}
          </AddPetContainerForm>
        )}
      </Formik>
      {isModalOpen && !isLoading && (
        <ModalAddPet toggleModal={() => navigate(backPage)}>
          {/* <AddPetModal backLink={backPage} category={data.option} /> */}
        </ModalAddPet>
      )}
    </AddPetDiv>
  );
};

export default AddPetForm;
