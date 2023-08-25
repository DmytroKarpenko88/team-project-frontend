import styled from 'styled-components';
import { theme } from 'styles';

const PetsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: calc(100% - 48px);
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background: ${theme.colors.white};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 20px 20px 77px 20px;

    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 20px 28px 31px 20px;
  }
`;

export { PetsCard };
