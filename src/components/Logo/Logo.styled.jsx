import styled from 'styled-components';
import { theme } from 'styles';


export const LogoIcon = styled.img`

display: block;

@media (min-width: ${theme.breakpoints.mobile}){
width: 116px;
height: 20px;
}

@media (min-width: ${theme.breakpoints.tablet}){
width: 162px;
height: 28px;
margin-right: 159px;
    }
`