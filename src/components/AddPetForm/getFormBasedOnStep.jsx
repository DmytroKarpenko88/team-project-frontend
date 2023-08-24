import FirstStepForm from './FirstStepForm/FirstStepForm';
import SecondStepForm from './SecondStepForm/SecondStepForm';
import ThirdStepForm from './ThirdStepForm/ThirdStepForm';

const getFormBasedOnStep = (step, data, setData) => {
  let formBasedOnStep;
  switch (step) {
    case 2:
      formBasedOnStep = <SecondStepForm data={data} setData={setData} />;
      break;
    case 3:
      formBasedOnStep = <ThirdStepForm data={data} setData={setData} />;
      break;

    default:
      formBasedOnStep = <FirstStepForm data={data} setData={setData} />;
  }
  return formBasedOnStep;
};
export default getFormBasedOnStep;
