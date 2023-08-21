import styled from 'styled-components';
import { theme } from 'styles';

export const PetsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.step * 5}px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.l};
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  color: ${theme.colors.black};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 28px;
  }
`;
