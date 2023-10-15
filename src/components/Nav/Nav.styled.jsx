import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const NavMenu = styled.ul.withConfig({
  shouldForwardProp: prop => prop !== 'click',
})`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 5;

  @media screen and (max-width: 767px) {
    padding: 38px 70px 219px 70px;
    height: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 70px;
    padding: 92px 0 700px 0;
    height: 100%;
  }

  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    flex-direction: column-reverse;
    display: ${({ click }) => (click ? 'visible' : 'none')};

    text-align: center;
    transition: all ${theme.transition.main};
    background-color: ${theme.colors.bgColor};
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
  }
`;

export const NavMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    text-align: center;
    height: 43px;
    &:not(:first-child) {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    text-align: center;

    &:not(:first-child) {
      height: 66px;
      margin-bottom: 60px;
    }
  }

  @media screen and (min-width: 1280px) {
    &:not(:first-child) {
      height: 44px;
      margin-right: 40px;
    }
  }
`;

export const NavMenuItemLink = styled(Link)`
  color: ${theme.colors.black};
  text-decoration: none;
  font-style: normal;
  font-family: ${theme.fonts.main.medium};
  font-size: 32px;
  margin: 0px;
  line-height: normal;
  font-weight: 500;
  letter-spacing: 1.22px;
  transition: all ${theme.transition.main};
  @media (min-width: 768px) and (max-width: 1279px) {
    margin: 0px;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1.92px;
  }
  @media screen and (min-width: 1280px) {
    font-style: normal;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.8px;
  }
  &:hover,
  :focus {
    color: ${theme.colors.yellow};
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.28px;
  }
`;

export const AuthContainerMobile = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const UserNavContainerMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 84px;
    display: visible;
  }
`;

export const LogoutButtnMobile = styled.div`
  position: absolute;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: visible;
    top: 499px;
    left: 10%;
  }
`;
