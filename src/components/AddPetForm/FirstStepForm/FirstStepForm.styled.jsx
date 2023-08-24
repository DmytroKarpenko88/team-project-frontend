import styled from 'styled-components';
import { theme } from 'styles';

// --------- FirstStepForm

export const FirstStepFormList = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  margin-top: 24px;
  margin-bottom: 20px;
`;
export const FirstStepFormItemLabel = styled.label`
  padding: 8px 16px;
  border-radius: 40px;

  letter-spacing: 0.56px;
  color: ${theme.colors.blue};
  background-color: ${theme.colors.blueLight};

  cursor: pointer;
  transition: color ${theme.colors.bgColor},
    background-color ${theme.colors.blue};

  &:hover,
  &:focus,
  &.active {
    color: ${theme.colors.bgColor}; // active
    background-color: ${theme.colors.blue}; // active
  }
`;
export const FirstStepFormItemInput = styled.input`
  display: none;

  &:checked {
    color: ${theme.colors.bgColor}; // active
    background-color: ${theme.colors.blue}; // active
  }
`;
