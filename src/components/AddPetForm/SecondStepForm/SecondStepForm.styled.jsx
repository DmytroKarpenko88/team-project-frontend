import styled from 'styled-components';
import { theme } from 'styles';
import { Field } from 'formik';

//  --------- AddPetForm

export const SecondStepFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    // font-size: 28px;
    margin-bottom: 40px;
  }
`;

export const SecondStepFormTitle = styled.label`
  position: relative;
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

  &:nth-last-child(-n + 1) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.l}; //20px;
  }
`;

// export const inputWrapper = styled.div`
// position: relative;
// `;

export const SecondStepFormInput = styled(Field)`
  font-family: Manrope;
  font-size: 14px; //16px

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  font-weight: 400;
  line-height: 1.5; /* 24px */
  letter-spacing: 0.56px; // 0.64px;
  color: ${theme.colors.grey};

  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid ;

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
