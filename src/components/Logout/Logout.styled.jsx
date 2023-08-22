import { styled } from 'styled-components';
import { theme } from 'styles';

export const LogoutBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.step * 3}px;
  border-color: transparent;
  font-family: ${theme.fonts.main.medium};
  font-size: ${theme.fontSizes.m};
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  color: ${theme.colors.grey};
  background-color: transparent;
  cursor: pointer;
  transition: color ${theme.transition.duration} ${theme.transition.main};

  &:hover,
  &:focus {
    color: ${theme.colors.yellow};
    svg {
      stroke: ${theme.colors.yellow};
    }
  }
`;
