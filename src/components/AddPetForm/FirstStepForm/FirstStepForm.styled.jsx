import { Field } from 'formik';
import styled from 'styled-components';
import { theme } from 'styles';
import { visualyHidden } from 'utils/visualyHidden';

// --------- FirstStepForm

export const FirstStepFormList = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 91px;

  margin-top: 24px;

  @media (min-width: 768px) {
    margin-bottom: 137px; //20px;;
  }
`;
export const FirstStepFormItemInput = styled(Field)`
  ${visualyHidden}
`;

export const FirstStepFormItemLabel = styled.label.withConfig({
  shouldForwardProp: prop => prop !== 'active',
})`
  padding: 8px 16px;
  border-radius: 40px;
  width: fit-content;
  font-weight: 500;
  font-size: 14px;

  letter-spacing: 0.56px;
  color: ${theme.colors.blue};
  background-color: ${theme.colors.blueLight};

  cursor: pointer;
  transition: all ${theme.transition.main};

  &:hover,
  &:focus,
  &:active {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }

  // ${FirstStepFormItemInput}:checked + && {} //active

  ${({ active }) =>
    active ? 'background-color:  #54adff; color: #FFFFFF; }' : ''}
`;
