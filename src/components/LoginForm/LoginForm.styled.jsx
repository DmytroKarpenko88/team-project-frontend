import {styled} from 'styled-components';
import { NavLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { theme } from 'styles';

export const MainLogForm = styled.main`
position: relative;
margin: 0 auto;
padding:  40px 12px;
text-align: center;
justify-content: center;
background-color: ${theme.colors.white};
border-radius: 20px;
width: 280px;
height: 425px;
`;

export const Titel = styled.h1`
font-size: ${theme.fontSizes.xl};
margin-bottom: 20px;
`;


export const InputForm = styled.input`
padding: 12px 16px;
width: 100%;
height: 48px;
font-size: ${theme.fontSizes.m};
margin-bottom: 14px;
border: solid 1px ${theme.colors.blue};
border-radius: 40px;
`;

export const OnIcon = styled(VisibilityIcon)`
position: absolute;
color: ${theme.colors.blue};
top: 165px;
left:230px;
`;

export const OffIcon = styled(VisibilityOffIcon)`
position: absolute;
color: ${theme.colors.blue};
top: 165px;
left:230px;
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
`;

export const ToRegister = styled.p`
color: ${theme.colors.grey};
font-size: ${theme.fontSizes.xs};
`;

export const LinkStyled = styled(NavLink)`
color: ${theme.colors.blue};
font-size: ${theme.fontSizes.xs};
margin-left: 4px;
text-decoration: underline;
`;