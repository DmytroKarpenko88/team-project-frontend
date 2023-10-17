import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.div`
  /* width: calc(100% - 40px); */
  width: 100%;
  position: static;
  margin-left: auto;
  margin-right: auto;
  top: 0px;
  z-index: 50;
  background-color: ${theme.colors.bgColor};

  @media screen and (max-width: 767px) {
    height: 24px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    height: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
`;

export const HeaderWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;

  @media screen and (max-width: 767px) {
    max-width: 480px;
    height: 24px;
    justify-content: space-between;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: 48px;
  }

`;

export const HeaderMenu = styled.div`
  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: 1279px) {
    display: flex;
    width: 375px;

  }

  @media  (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    max-width: 100%;
    height: 48px;
    align-items: center;
  }
`;


export const UserNavContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: visible;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    display: none;
  }
`;

export const UserNavBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconOpenMenu = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    transition: all ${theme.transition.main};
  }

  @media screen and (max-width: 1279px) {
    display: flex;
    margin-left: auto;
    align-items: center;
    transition: all ${theme.transition.main};
  }
`;

export const MenuButton = styled.span`
  svg {
    stroke: ${theme.colors.yellow};
  }

  &:hover,
  &:focus {
    stroke: ${theme.colors.blue};
  }
`;

export const CrossButton = styled.span`
  svg {
    stroke: ${theme.colors.yellow};
  }

  &:hover,
  &:focus {
    stroke: ${theme.colors.blue};
  }
`;
