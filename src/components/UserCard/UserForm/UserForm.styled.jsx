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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-top: 22px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: calc(100vw - 40vw);
  display: flex;
  padding: 4px 12px;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${theme.colors.blue};
  font-family: ${theme.fonts.main.regular};
  font-size: ${theme.fontSizes.xs};
  line-height: normal;
  letter-spacing: 0.48px;
  transition: border-color ${theme.transition.duration} ${theme.transition.main};

  &:hover,
  &:focus {
    border-color: ${theme.colors.yellow};
    outline: transparent;
  }
  @media screen and (min-width: 480px) {
    width: 255px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 30px;
    font-size: ${theme.fontSizes.m};
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  width: 248px;
  margin-top: 21px;
  margin-right: auto;
  margin-left: auto;
  padding: 6px 107px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: ${theme.colors.blue};
  font-family: ${theme.fonts.main.bold};
  font-size: ${theme.fontSizes.s};
  line-height: normal;
  letter-spacing: 0.56px;
  cursor: pointer;

  transition: all ${theme.transition.duration} ${theme.transition.main};

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
  }

  &:disabled {
    background: ${theme.colors.grey};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 255px;
    margin-top: 10px;
    margin-left: 120px;
  }
`;

const Error = styled.p`
  position: absolute;
  bottom: -17px;
  left: 0;
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.xs};
  white-space: nowrap;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    left: 32%;
  }
`;

export {
  StyledForm,
  FieldsContainer,
  Label,
  Input,
  SubmitBtn,
  Error,
  InputContainer,
};
