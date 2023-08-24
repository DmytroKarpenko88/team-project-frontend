import styled from 'styled-components';
import { theme } from 'styles';

const AddPetDiv = styled.div`
  // width: fit-content;
  // padding: 20px 8px 17px;
  // margin: 68px auto;
  margin: 20px auto;
  border-radius: 40px;
  box-shadow: ${theme.boxShadows.main};
  background-color: ${theme.colors.white};

  font-family: ${theme.fonts.main.medium}; //500
  font-size: ${theme.fontSizes.s}; //14px
  line-height: 1.5; //21px

  @media screen and (min-width: 498px) {
    width: 458px;
  }
  // and (max-width: ${theme.breakpoints.desktop})
`;

export { AddPetDiv };
