import { styled } from 'styled-components';

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-color: transparent;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500px;
  line-height: normal;
  letter-spacing: 0.64px;
  color: #888888;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    fill: #54adff;
  }
  &:hover,
  &:focus {
    color: #ffc107;
    svg {
      fill: #ffc107;
    }
  }
`;
