import FirstStepForm from './FirstStepForm/FirstStepForm';
import SecondStepForm from './SecondStepForm/SecondStepForm';
import ThirdStepForm from './ThirdStepForm/ThirdStepForm';
import ThirdStepFormExpanded from './ThirdStepFormExpanded/ThirdStepFormExpanded';

const getFormBasedOnStep = (step, data, setData) => {
  let formBasedOnStep;
  switch (step) {
    case 2:
      formBasedOnStep = <SecondStepForm data={data} setData={setData} />;
      break;
    case 3:
      if (data.option !== 'pet') {
        formBasedOnStep = (
          <ThirdStepFormExpanded
            data={data}
            setData={setData}
            // fileRef={fileRef}
            // fileInputRef={fileInputRef}
          />
        );
      } else {
        formBasedOnStep = (
          <ThirdStepForm
            data={data}
            setData={setData}
            // fileRef={fileRef}
            // fileInputRef={fileInputRef}
          />
        );
      }
      break;

    default:
      formBasedOnStep = <FirstStepForm data={data} setData={setData} />;
  }
  return formBasedOnStep;
};
export default getFormBasedOnStep;
