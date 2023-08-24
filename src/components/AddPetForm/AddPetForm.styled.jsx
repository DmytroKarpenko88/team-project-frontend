import styled from 'styled-components';
import { theme } from 'styles';

//  --------- AddPetForm

export const AddPetContainerForm = styled.form`
  padding: 20px 8px;
`;

export const AddPetFormTitle = styled.h2`
  margin-bottom: 24px;

  padding-left: 12px;
  line-height: normal;
  font-size: ${theme.fontSizes.l}; //20px
  color: ${theme.colors.black};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const AddPetBtnList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const AddPetBtnItem = styled.li`
  list-style: none;
  font-size: ${theme.fontSizes.m}; // 16px
  font-weight: ${theme.fonts.main.bold}; // 700
`;

export const AddPetBtnNext = styled.button`
  display: flex;
  justify-content: center;
  gap: 12px;

  padding: 8px 28px;
  letter-spacing: 0.56px;
  font-size: ${theme.fontSizes.m}; // 16px
  font-weight: ${theme.fonts.main.bold}; // 700

  min-width: 248px;
  border-radius: 40px;

  color: ${theme.colors.white};
  background-color: ${theme.colors.blue};

  svg {
    fill: ${theme.colors.white};
  }

  @media (min-width: 768px) {
    // margin-top: 30px;
    // margin-bottom: 16px;
    // font-family: ${theme.fonts.main.semiBold};
  }
  @media screen and (min-width: 1281px) {
    // margin-top: 8px;
  }
`;

export const AddPetBtnCancel = styled.button`
  padding: 0px 0px;
  border-radius: 40px;
  font-weight: ${theme.fonts.main.bold}; // 700
  font-size: ${theme.fontSizes.m}; // 16px
  line-height: 22px;
  letter-spacing: 0.64px;
  color: ${theme.colors.blue}; // #54adff;
  // border: none;
  // outline: none;
  background-color: transparent;
`;

export const AddPetBtnCancelDiv = styled.div`
  display: flex;
  gap: 12px;
`;
