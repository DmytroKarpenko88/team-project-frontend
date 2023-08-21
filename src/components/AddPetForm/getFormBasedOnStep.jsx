import FirstStepForm from './FirstStepForm';
import SecondStepForm from './SecondStepForm';
import ThirdStepForm from './ThirdStepForm';

const getFormBasedOnStep = (step, data) => {
  switch (step) {
    case 2:
      <SecondStepForm data={data} />;
      break;
    case 3:
      <ThirdStepForm data={data} />;
      break;

    default:
      <FirstStepForm data={data} />;
  }
  return;
};
export default getFormBasedOnStep;
