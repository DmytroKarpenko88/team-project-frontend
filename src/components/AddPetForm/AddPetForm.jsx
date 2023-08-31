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
    price: '',
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

  const handleSubmit = values => {
    if (!data.category) return;

    if (data.category === 'pet') {
      const pets = {
        name: data.name,
        petURL: data.petURL,
        birthday: data.birthday,
        type: data.type,
        describe: data.describe,
      };
      console.log(' pets:', pets);

      const formData = new FormData();
      for (let keys in pets) {
        formData.append(keys, pets[keys]);
      }
      dispatch(addPet(formData));
      toggleModal();
      navigate('/user');
      return;
    }

    if (data.category === "in-good-hands" || data.category === 'lost-found') {
      const pets = {
        name: data.name,
        petURL: data.petURL,
        birthday: data.birthday,
        type: data.type,
        describe: data.describe,
        category: data.category,
        title: data.title,
        sex: data.sex,
        location: data.location,
      };
      const formData = new FormData();
      for (let keys in pets) {
        formData.append(keys, pets[keys]);
      }
      dispatch(addNotice(formData));
      toggleModal();

      if (data.category === "in-good-hands") {
        navigate('/notices/in-good-hands');
      }
      if (data.category === 'lost-found') {
        navigate('/notices/lost-found');
      }

      return;
    }

    if (data.category === 'sell') {
      const pets = {
        name: data.name,
        petURL: data.petURL,
        birthday: data.birthday,
        type: data.type,
        describe: data.describe,
        category: data.category,
        title: data.title,
        price: data.price,
        sex: data.sex,
        location: data.location,
      };
      const formData = new FormData();
      for (let keys in pets) {
        formData.append(keys, pets[keys]);
      }
      dispatch(addNotice(formData));
      toggleModal();
      navigate('/notices/sell');
      return;
    }
  };

  // console.log(location); //{pathname: '/add-pet', search: '', hash: '', state: null, key: 'default'}
  // const backPage = step === 1 ? location.state?.from ?? '/user' : '';
  const backPage = location.state?.from ?? '/';

  console.log('data:', data);
  return (
    <AddPetDiv data={data} step={step}>
      <Formik
        initialValues={data}
        validationSchema={validatePetSchema}
        onSubmit={handleSubmit}
        // validateOnChange={false}
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
                step={step}
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
                step={step}
                setData={setData}
                nextStep={handleNextClick}
                backStep={handlePrevClick}
              />
            )}
            {step === 3 && data.category !== 'pet' ? (
              <ThirdStepFormExpanded
                errors={errors}
                data={data}
                step={step}
                setData={setData}
                backStep={handlePrevClick}
                submit={handleSubmit}
              />
            ) : (
              step === 3 && (
                <ThirdStepForm
                  errors={errors}
                  data={data}
                  step={step}
                  setData={setData}
                  backStep={handlePrevClick}
                  submit={handleSubmit}
                />
              )
            )}
          </AddPetContainerForm>
        )}
      </Formik>
      {isModalOpen && !isLoading && (
        <ModalAddPet toggleModal={() => navigate(backPage)}>
          {/* <AddPetModal backLink={backPage} category={data.category} /> */}
        </ModalAddPet>
      )}
    </AddPetDiv>
  );
};

export default AddPetForm;
