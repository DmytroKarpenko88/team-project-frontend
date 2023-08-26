import { styled } from 'styled-components';
import { theme } from 'styles';

export const SVGStyled = styled.svg`
  width: 24px;
  height: 24px;
  /* fill: #54adff; */
  fill: ${theme.colors.blue};
  transition: fill ${theme.transition.duration} ${theme.transition.main};
  &:hover,
  &:focus {
    fill: ${theme.colors.yellow};
  }
`;

export const SVGStyledStroke = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.blue};

  transition: stroke ${theme.transition.duration} ${theme.transition.main};
  &:hover,
  &:focus {
    /* fill: ${theme.colors.yellow}; */
    stroke: ${theme.colors.yellow};
  }
`;
