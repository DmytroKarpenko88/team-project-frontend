import styled from 'styled-components';
import { theme } from 'styles';

//  --------- AddPetForm

export const SecondStepFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const SecondStepFormTitle = styled.label`
  color: ${theme.colors.black}; // #111111
  font-family: ${theme.fonts.main.medium}; // Manrope 500
  font-weight: 500;
  font-size: ${theme.fontSizes.s}; //14px;
  font-style: normal;
  line-height: normal;

  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 20px;

  // @media screen and (min-width: ${theme.breakpoints.tablet}) {
  //   font-size: 28px;
  // }
`;

export const SecondStepFormInput = styled.input`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid ${theme.colors.blue};

  &:hover,
  &focus,
  &:active {
    border: 1px solid ${theme.colors.blue};
    outline: 1px solid ${theme.colors.blue};
  }
  // @media (min-width: 768px) {
  //   flex-direction: row-reverse;
  // }
`;
