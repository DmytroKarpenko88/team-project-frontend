import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ErrorMessage, Field } from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { theme } from 'styles';

export const MainLogForm = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 40px 12px;
  text-align: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  width: 280px;
  height: 425px;
  box-shadow: 7px 10px 14px rgba(63, 143, 248, 0.11);
  z-index: 0;
  @media (min-width: 768px) {
    padding: 60px 75px;
    width: 608px;
    height: 481px;
    border-radius: 40px;
    /* z-index: 99; */
  }
  @media screen and (min-width: 1281px) {
    height: 481px;
  }
`;

export const Titel = styled.h1`
  font-size: ${theme.fontSizes.xl};
  font-family: ${theme.fonts.main.medium};
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xxl};
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1281px) {
  }
`;

export const FormField = styled.div`
  position: relative;
`;

export const InputEmailWraper = styled.div`
  margin-bottom: 14px;
  border-radius: 40px;
  border: 1px solid ${theme.colors.blue};
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const InputPasswordWraper = styled.div`
  margin-bottom: 14px;
  border-radius: 40px;
  border: 1px solid ${theme.colors.blue};
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const InputForm = styled(Field)`
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  font-size: ${theme.fontSizes.m};
  font-family: ${theme.fonts.main.regular};
  border: none;
  border-radius: 40px;
  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.m};
  }
  @media screen and (min-width: 1281px) {
  }
`;

export const ErrorMess = styled(ErrorMessage)`
  position: absolute;
  font-size: 10px;
  color: ${theme.colors.red};
  left: 10px;
  top: 47px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const SuccessMessage = styled.p`
  position: absolute;
  font-size: 10px;
  color: ${theme.colors.green};
  left: 10px;
  top: 47px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const IconWraper = styled.div`
  display: flex;
  position: absolute;
  justify-content: end;
  width: 54px;
  top: 12px;
  left: 187px;
  @media (min-width: 768px) {
    width: 60px;
    top: 12px;
    left: 383px;
  }
`;

export const IconCheck = styled.span`
  margin-right: auto;
  svg {
    stroke: ${theme.colors.green};
    &:hover {
      stroke: ${theme.colors.green};
    }
  }
  @media (min-width: 768px) {
    top: 12px;
    left: 420px;
  }
`;

export const IconCross = styled.span`
  margin-right: auto;
  svg {
    stroke: ${theme.colors.red};
    &:hover {
      stroke: ${theme.colors.red};
    }
  }
  @media (min-width: 768px) {
    top: 12px;
    left: 420px;
  }
`;

export const OnIcon = styled(VisibilityIcon)`
  color: ${theme.colors.blue};
  @media (min-width: 768px) {
    top: 12px;
    left: 420px;
  }
`;

export const OffIcon = styled(VisibilityOffIcon)`
  color: ${theme.colors.blue};
  @media (min-width: 768px) {
    top: 12px;
    left: 420px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 96px;
  margin-bottom: 8px;
  font-size: ${theme.fontSizes.l};
  color: ${theme.colors.white};
  border-radius: 40px;
  background-color: ${theme.colors.blue};
  transition: all ${theme.transition.main};

  &:hover {
    background-color: rgb(121, 189, 253);
  }
  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 20px;
    font-family: ${theme.fonts.main.semiBold};
  }
  @media screen and (min-width: 1281px) {
  }
`;

export const ToRegister = styled.p`
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.xs};
  font-family: ${theme.fonts.main.regular};
`;

export const LinkStyled = styled(NavLink)`
  color: ${theme.colors.blue};
  font-size: ${theme.fontSizes.xs};
  font-family: ${theme.fonts.main.regular};
  margin-left: 4px;
  text-decoration: underline;
`;
