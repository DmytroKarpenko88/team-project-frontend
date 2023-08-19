import { styled } from 'styled-components';
import { theme } from 'styles';

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 12px; */
  gap: ${theme.spacing.step * 3}px;
  border-color: transparent;
  font-family: inherit;
  /* font-size: 16px; */
  font-size: ${theme.fontSizes.m};

  font-weight: 500px;
  line-height: normal;
  letter-spacing: 0.64px;
  /* color: #888888; */
  color: ${theme.colors.grey};
  background-color: transparent;
  cursor: pointer;
  transition: color var(--duration) var(--cubic);
  svg {
    width: 24px;
    height: 24px;
    /* fill: #54adff; */
    fill: ${theme.colors.blue};
  }
  &:hover,
  &:focus {
    color: ${theme.colors.yellow};
    svg {
      fill: ${theme.colors.yellow};
    }
  }
`;
