import { styled } from 'styled-components';
import { theme } from 'styles';

export const SpanStyled = styled.span`
  svg {
    stroke: ${theme.colors.red};
  }
`;

export const Box = styled.div`
  .user-icon svg {
    stroke: ${theme.colors.yellow};
  }
`;
