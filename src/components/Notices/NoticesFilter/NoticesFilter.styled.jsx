import styled from 'styled-components';

export const FilterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 40px;
  height: 40px;
  padding: 9px 8px 7px;
  color: var(--btn-bg-color);
  font-weight: 700;

  background: var(--labels-bg-color);
  border: none;
  border-radius: 50%;

  transition: color var(--duration) var(--cubic),
    background var(--duration) var(--cubic);

  &:hover,
  &:focus {
    color: var(--label-active-color);
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    min-width: 152px;

    background: transparent;
    border-width: 2px;
    border-color: var(--btn-bg-color);
    border-style: solid;
    border-radius: 40px;

    font-size: 16px;
  }
`;