import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Link } from 'react-router-dom';

export const LogOut = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.step * 1}px;
  color: ${theme.colors.white};
  font-weight: 700;
  width: 135px;

  padding: 8px 20px;
  font-size: ${theme.fontSizes.m};
  line-height: normal;
  letter-spacing: 0.64px;
  background: ${theme.colors.blue};
  border: none;
  border-radius: 40px;
  box-shadow: ${theme.boxShadows.main};
  transition: all ${theme.transition.main};
  ${theme.transition.main};

  svg {
    stroke: ${theme.colors.white};
  }
  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
    svg {
      stroke: ${theme.colors.white};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.mobile}){
    margin-right: 24px;
  }
`;


export const Text = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.m};
  text-align: center;
`;
