import styled from 'styled-components';
import { theme } from 'styles';

export const Wrapper = styled.h2`
  padding-top: 40px;
  margin-bottom: 24px;
  font-family: ${theme.fonts.main.bold};
  font-size: ${theme.fontSizes.xl};
  line-height: 1.38;
  text-align: center;
  color: ${theme.colors.black};

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    margin-bottom: 40px;
    font-size: ${theme.fontSizes.xxxl};
    line-height: 1.38;
    font-family: ${theme.fonts.main.bold};
  }
`;
