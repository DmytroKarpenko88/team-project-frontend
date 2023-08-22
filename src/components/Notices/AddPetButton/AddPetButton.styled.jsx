import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const Btn = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;

  position: fixed;
  top: 430px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  color: ${theme.colors.white};
  font-weight: 600;

  width: 80px;
  height: 80px;
  padding: 20px 17px;

  font-size: 12px;
  color: #fff;

  background: ${theme.colors.blue};
  border: none;
  border-radius: 40px;
  box-shadow: ${theme.boxShadows.main};

  z-index: 1;

  transition: background 250ms ${theme.transition.main};

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
  }

  svg {
    stroke: ${theme.colors.white};
  }
  svg:hover,
  svg:focus {
    stroke: ${theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: static;
    translate: 0 0;

    gap: 8px;

    width: 129px;
    height: 40px;
    padding: 8px 18px;
    border-radius: 40px;

    font-size: 16px;
  }
`;
