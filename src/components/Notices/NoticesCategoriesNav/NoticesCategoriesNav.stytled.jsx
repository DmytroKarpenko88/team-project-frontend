import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const List = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  background: ${theme.colors.blueLight};
  border-radius: 40px;

  font-weight: ${theme.fonts.main.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.73;
  color: ${theme.colors.blue};
  letter-spacing: 0.04em;
  transition: color 250ms ${theme.transition.main},
    background-color 250ms ${theme.transition.main};

  &:hover,
  &:focus {
    color: ${theme.colors.bgColor};
    background-color: ${theme.colors.blue};
    text-decoration: none;
  }

  &.active {
    color: ${theme.colors.bgColor};
    background-color: ${theme.colors.blue};
    text-decoration: none;
  }
`;
