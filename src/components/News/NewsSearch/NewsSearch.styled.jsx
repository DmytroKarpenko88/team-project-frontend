import styled from 'styled-components';
import { theme } from 'styles';

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 480px;

  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 24px;
  border-radius: 24px;
  box-shadow: ${theme.boxShadows.main};

  &:focus,
  &:hover {
    box-shadow: ${theme.boxShadows.secondary};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 608px;
    height: 44px;
    margin-bottom: 40px;
  }

  @media screen and(min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 60px;
  }
`;

export const Input = styled.input`
  max-width: 480px;
  height: 44px;
  padding-left: 20px;
  border: none;
  outline: none;

  font-family: ${theme.fonts.secondary.regular};
  font-size: ${theme.fontSizes.m};
  line-height: 1.2;

  color: ${theme.colors.grey};
  background: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.l};
    line-height: 1.2;
    letter-spacing: 0.04em;
    width: 100%;
  }
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'search',
})`
  position: absolute;
  top: 10px;
  right: 20px;

  border: none;
  background-color: transparent;
  cursor: pointer;

  transform: ${({ search }) => search && 'translateX(-27px)'};

  transition: all ${theme.transition.main};

  svg:hover,
  svg:focus {
    fill: ${theme.colors.blue};
  }
`;

export const ClearBtn = styled(Button)`
  svg {
    stroke: ${theme.colors.yellow};
  }
  svg:hover,
  svg:focus {
    fill: ${theme.colors.yellow};
  }
`;
