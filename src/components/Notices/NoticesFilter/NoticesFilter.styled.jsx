import styled from 'styled-components';
import { theme } from 'styles';

export const FilterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 40px;
  height: 40px;
  padding: 9px 8px 7px;
  color: ${theme.colors.blue};
  font-weight: 700;

  background: ${theme.colors.blueLight};
  border: none;
  border-radius: 50%;

  transition: color 250ms ${theme.transition.main},
    background 250ms ${theme.transition.main};

  &:hover,
  &:focus {
    color: ${theme.colors.bgColor};
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
  &:hover svg {
    stroke: ${theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    min-width: 152px;

    background: transparent;
    border-width: 2px;
    border-color: ${theme.colors.blueLight};
    border-style: solid;
    border-radius: 40px;

    font-size: 16px;
  }
`;
