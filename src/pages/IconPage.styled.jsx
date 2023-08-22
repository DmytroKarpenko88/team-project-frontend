import { styled } from 'styled-components';
import { theme } from 'styles';

export const SpanStyled = styled.span`
  svg {
    stroke: ${theme.colors.red};
  }
`;

export const Box = styled.div`
  /* heart style */
  .heart.favorite svg {
    fill: ${theme.colors.blue};
  }
  .heart svg:hover,
  svg:focus {
    fill: ${theme.colors.blue};
    stroke: ${theme.colors.blue};
  }

  .user-icon svg {
    stroke: ${theme.colors.yellow};
  }
  .user-icon:hover {
    svg {
      stroke: ${theme.colors.red};
    }
  }
`;
