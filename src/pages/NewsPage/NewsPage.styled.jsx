import styled from 'styled-components';
import {theme} from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  scroll-behavior: smooth;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 80px;
  }
`
export const Title = styled.h1`
color: ${theme.colors.black};
margin-bottom: 24px;
text-align: center;
font-family: Manrope;
font-size: ${theme.fontSizes.xl};
font-style: normal;
font-weight: 700;
line-height: normal;

@media screen and (min-width: ${theme.breakpoints.tablet}){
font-size: ${theme.fontSizes.xxxl};
font-weight: 700;
margin-bottom: 40px;
}
`
  ;