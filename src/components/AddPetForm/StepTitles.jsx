import {
  StepTitlesContainer,
  StepTitlesItems,
  StepTitlesLine,
} from './AddPetForm.styled';

const StepTitles = ({ step }) => {
  return (
    <StepTitlesContainer>
      <StepTitlesItems>
        Choose option
        {step === 1 ? <StepTitlesLine /> : <StepTitlesLine />}
      </StepTitlesItems>

      <StepTitlesItems>
        Personal details
        <StepTitlesLine />
      </StepTitlesItems>

      <StepTitlesItems>
        More info
        <StepTitlesLine />
      </StepTitlesItems>
    </StepTitlesContainer>
  );
};
export default StepTitles;
