import {styled} from 'styled-components';
import { NavLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ErrorMessage, Field  } from 'formik';
import { theme } from 'styles';

export const FormContainer = styled.div`
/* position: relative; */
margin: 0 auto;
padding:  40px 12px;
text-align: center;
justify-content: center;
background-color: ${theme.colors.white};
border-radius: 20px;
width: 280px;
height: 479px;
box-shadow: 7px 10px 14px rgba(63, 143, 248, 0.11);
/* z-index: 99; */
@media (min-width: 768px) {
    padding:  60px 75px;
    width: 608px;
    height: 629px;
    border-radius: 40px;
    /* z-index: 99; */
  }
@media screen and (min-width: 1281px) {
    height: 617px;
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
`;

export const FormField = styled.div`
position: relative;
`;

export const InputForm = styled(Field)`
padding: 12px 16px;
width: 100%;
height: 48px;
font-size: ${theme.fontSizes.m};
font-family: ${theme.fonts.main.regular};
margin-bottom: 14px;
border: solid 1px ${theme.colors.blue};
border-radius: 40px;
@media (min-width: 768px) {
    font-size: ${theme.fontSizes.m};
    margin-bottom: 32px;
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
};
`;

export const OnIconPass = styled(VisibilityIcon)`
position: absolute;
color: ${theme.colors.blue};
top: 12px;
left:218px;
@media (min-width: 768px) {
    top: 12px;
    left:420px; 
}
`;

export const OffIconPass = styled(VisibilityOffIcon)`
position: absolute;
color: ${theme.colors.blue};
top: 12px;
left:218px;
@media (min-width: 768px) {
    top: 12px;
    left:420px; 
}
`;

export const OnIconConPass = styled(VisibilityIcon)`
position: absolute;
color: ${theme.colors.blue};
top: 12px;
left:218px;
@media (min-width: 768px) {
    top: 12px;
    left:420px;
}
`;

export const OffIconConPass = styled(VisibilityOffIcon)`
position: absolute;
color: ${theme.colors.blue};
top: 12px;
left:218px;
@media (min-width: 768px) {
    top: 12px;
    left:420px;
}
`;

export const Button = styled.button`
width: 100%;
height: 48px;
margin-top: 26px;
margin-bottom: 8px;
font-size: ${theme.fontSizes.l};
color: ${theme.colors.white};
border-radius: 40px;
background-color: ${theme.colors.blue};
&:hover {
    background-color: ${theme.colors.grBlue};
};
@media (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 16px;
font-family: ${theme.fonts.main.semiBold};
}
@media screen and (min-width: 1281px) {
    margin-top: 8px;
  }
`;

export const ToLogin = styled.p`
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