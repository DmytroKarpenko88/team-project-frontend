import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StepTitles from './StepTitles/StepTitles';
import getTitle from './getTitle';
import {
  AddPetDiv,
  AddPetFormTitle,
  AddPetContainerForm,
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
import { addPet } from 'redux/pets/pets-operations';

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
    category: '',
    title: '',
    name: '',
    sex: '',
    petURL: '',
    location: '',
    birthday: '',
    type: '',
    describe: '',
  });

  const title = getTitle(data);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  const handleNextClick = e => {
    setStep(prevState => prevState + 1);
  };
  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  const handleSubmit = async value => {
    console.log('value:', value);

    if (!data.category) return;
    if (data.category === 'pet') {
      const pets = {
        name: data.name,
        petURL: data.petURL,
        birthday: data.birthday,
        type: data.type,
        describe: data.describe,
      };
      dispatch(addPet(pets));
      toggleModal();
      return;
    }

    if (
      data.category === 'hands' ||
      data.category === 'sell' ||
      data.category === 'lostFound'
    ) {
      dispatch(addNotice(data));
      toggleModal();
      return;
    }
  };

  // console.log(location); //{pathname: '/add-pet', search: '', hash: '', state: null, key: 'default'}
  // const backPage = step === 1 ? location.state?.from ?? '/user' : '';
  const backPage = location.state?.from ?? '/user';

  // console.log('data:', data);
  return (
    <AddPetDiv data={data} step={step}>
      <Formik
        initialValues={data}
        validationSchema={validatePetSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <AddPetContainerForm
          // onClick={onClick}
          >
            <AddPetFormTitle>{title}</AddPetFormTitle>
            <StepTitles step={step} />
            {step === 1 && (
              <FirstStepForm
                errors={errors}
                values={values}
                data={data}
                setData={setData}
                nextStep={handleNextClick}
                cancel={backPage}
              />
            )}
            {step === 2 && (
              <SecondStepForm
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
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
                <AddPetBtnCancel type="button" onClick={back}>
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
        <ModalAddPet toggleModal={() => navigate(backPage)} backLink={backPage}>
          {/* <AddPetModal backLink={backPage} category={data.option} /> */}
        </ModalAddPet>
      )}
    </AddPetDiv>
  );
};

export default AddPetForm;
