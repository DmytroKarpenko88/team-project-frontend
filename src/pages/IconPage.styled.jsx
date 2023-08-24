import { styled } from 'styled-components';
import { theme } from 'styles';

export const SpanStyled = styled.span`
  svg {
    stroke: ${theme.colors.red};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
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
