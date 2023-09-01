import styled from 'styled-components';
import { theme } from 'styles';

export const ErrorText = styled.p`
  position: absolute;
  bottom: -16px;
  left: 8px;

  font-size: ${theme.fontSizes.xs};
  line-height: 1.33;
  color: ${theme.colors.red};
  /* transform: translateY(100%); */
`;
