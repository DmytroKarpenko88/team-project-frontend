import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const Auth = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 18px;
  }
`;

export const LinkRegister = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.main.semiBold};
  width: 165px;
  height: 40px;
  color: ${theme.colors.yellow};
  border: solid 2px ${theme.colors.yellow};
  border-radius: 40px;
  background-color: ${theme.colors.white};
  cursor: pointer;
  transition: ${theme.transition};
  &:hover {
    /* transform: scale(1.05); */
    transition: ${theme.transition.duration};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
  }
  &.active {
    transition: ${theme.transition.duration};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
  }

  @media (min-width: 768px) {
  }
`;

export const LinkLogin = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.main.semiBold};
  width: 165px;
  height: 40px;
  margin-bottom: 15px;
  color: ${theme.colors.yellow};
  border: solid 2px ${theme.colors.yellow};
  border-radius: 40px;
  background-color: ${theme.colors.white};
  cursor: pointer;
  transition: ${theme.transition};
  svg {
    fill: ${theme.colors.yellow};
    margin-left: 8px;
    margin-bottom: 2px;
  }
  &:hover {
    /* transform: scale(1.05); */
    transition: ${theme.transition.duration};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
    svg {
      fill: ${theme.colors.white};
    }
  }
  &.active {
    transition: ${theme.transition.duration};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
    svg {
      fill: ${theme.colors.white};
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

export const Text = styled.p`
  text-align: center;
`;
