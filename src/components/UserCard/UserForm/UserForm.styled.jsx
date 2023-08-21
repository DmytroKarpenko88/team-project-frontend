import { styled } from 'styled-components';
import { theme } from 'styles';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: raw-reverse;
    align-items: flex-start;
    gap: ${theme.spacing.step * 17.75}px;
    width: calc(100% - 34px);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const FieldsContainer = styled.div`
  position: relative;
  margin-top: 59px;
  display: grid;
  grid-template-columns: 62px 1fr;
  grid-template-rows: repeat(6, 24px);
  grid-template-areas:
    '.'
    '.'
    '.'
    '.'
    '.'
    '. submit';
  gap: 16px 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 0;
    width: 255px;
    grid-template-columns: 62px 1fr;
    grid-template-rows: repeat(5, 30px);
    gap: 20px 0px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: flex-end;
  font-size: ${theme.fontSizes.s};
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
`;

const Input = styled.input`
  display: flex;
  padding: 4px 12px;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${theme.colors.blue};
  font-family: ${theme.fonts.main.regular};
  font-size: ${theme.fontSizes.xs};
  line-height: normal;
  letter-spacing: 0.48px;
  transition: border-color var(--duration) ${theme.transition.main};

  &:hover,
  &:focus {
    border-color: ${theme.colors.yellow};
    outline: transparent;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 30px;
    font-size: ${theme.fontSizes.m};
  }
`;

const SubmitBtn = styled.button`
  grid-column: 1 / span 2;
  display: flex;
  width: 248px;
  padding: 6px 107px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: ${theme.colors.blue};
  font-family: ${theme.fonts.main.bold};
  font-size: ${theme.fontSizes.s};
  line-height: normal;
  letter-spacing: 0.56px;
  cursor: pointer;
  margin: auto;
  transition: all var(--duration) ${theme.transition.main};

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
  }

  &:disabled {
    background: ${theme.colors.grey};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-area: submit;
  }
`;

export { StyledForm, FieldsContainer, Label, Input, SubmitBtn };
