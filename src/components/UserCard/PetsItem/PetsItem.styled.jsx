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

const PetImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: ${theme.colors.blue};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 128px;
    height: 128px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 161px;
    height: 161px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  // @media screen and (min-width: 768px) {
  //   width: 515px;
  // }
  // @media screen and (min-width: 1200px) {
  //   width: 580px;
  // }
`;

const DeleteBtn = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;
  float: right;
`;

const PetInfo = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.s};
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.m};
    line-height: 22px;
    letter-spacing: 0.64px;
  }
`;

export { PetsCard, InfoContainer, PetImage, DeleteBtn, PetInfo };
