import {
  StepTitlesContainer,
  StepTitlesItems,
  StepTitlesLine,
} from './StepTitles.styled';

const StepTitles = ({ step }) => {
  const setChooseOption = () => {
    if (step === 1) return 'current';
    if (step > 1) return 'previous';
    return '';
  };
  const setPersonalDetails = () => {
    if (step === 2) return 'current';
    if (step > 2) return 'previous';
    return '';
  };
  const setMoreInfo = () => {
    if (step === 3) return 'current';
    if (step > 3) return 'previous';
    return '';
  };

  return (
    <StepTitlesContainer>
      <StepTitlesItems className={setChooseOption()}>
        Choose option
        <StepTitlesLine className={setChooseOption()} />
      </StepTitlesItems>

      <StepTitlesItems className={setPersonalDetails()}>
        Personal details
        <StepTitlesLine className={setPersonalDetails()} />
      </StepTitlesItems>

      <StepTitlesItems className={setMoreInfo()}>
        More info
        <StepTitlesLine className={setMoreInfo()} />
      </StepTitlesItems>
    </StepTitlesContainer>
  );
};
export default StepTitles;
