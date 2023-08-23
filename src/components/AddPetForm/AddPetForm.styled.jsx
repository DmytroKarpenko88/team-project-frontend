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
`;
export const AddPetBtnItem = styled.li`
  list-style: none;
  font-size: ${theme.fontSizes.m}; // 16px
  font-weight: ${theme.fonts.main.bold}; // 700
`;
export const AddPetBtnNext = styled.button`
  padding: 8px 28px;
  letter-spacing: 0.56px;
  font-size: ${theme.fontSizes.m}; // 16px
  font-weight: ${theme.fonts.main.bold}; // 700

  min-width: 248px;
  border-radius: 40px;

  color: ${theme.colors.white};
  fill: ${theme.colors.white};
  background-color: ${theme.colors.blue};

  @media (min-width: 768px) {
    // margin-top: 30px;
    // margin-bottom: 16px;
    // font-family: ${theme.fonts.main.semiBold};
  }
  @media screen and (min-width: 1281px) {
    // margin-top: 8px;
  }
`;
// export const AddPetBtnIconPaw = styled(Paw)`
//   fill: ${theme.colors.bgColor}; // #fef9f9;
// `;
export const AddPetBtnCancel = styled.button`
  border-radius: 40px;

  font-weight: ${theme.fonts.main.bold}; // 700
  font-size: ${theme.fontSizes.m}; // 16px
  line-height: 22px;
  letter-spacing: 0.64px;
  color: ${theme.colors.blue}; // #54adff;
  padding: 0px 0px;

  // border: none;
  // outline: none;
  background-color: transparent;
`;

// --------  StepTitles

export const StepTitlesContainer = styled.ul`
  margin-bottom: 24px;
`;

export const StepTitlesItems = styled.li`
  // position: relative;
  list-style: none;
  display: inline-block;
  text-align: start;
  min-width: 80px;

  margin-right: 12px;

  font-style: normal;
  font-size: 10px;
  line-height: 26.5px;
  color: ${theme.colors.grey};

  &:last-child {
    margin-right: 0px;
  }

  &:nth-child(2) {
    // margin-right: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
    min-width: 120px;
  }
`;

export const StepTitlesLine = styled.div`
  // position: absolute;
  margin-top: 12px;
  // top: 26px;
  // left: 0;
  background-color: ${theme.colors.blueLight};
  border-radius: 8px;
  width: 80px;
  height: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 120px;
  }
`;
// --------- FirstStepForm

export const FirstStepFormList = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  margin-bottom: 20px;
`;
export const FirstStepFormItemLabel = styled.label`
  padding: 8px 16px;
  border-radius: 40px;

  letter-spacing: 0.56px;
  color: ${theme.colors.blue};
  background-color: ${theme.colors.blueLight};

  cursor: pointer;
  transition: color ${theme.colors.bgColor},
    background-color ${theme.colors.blue};

  &:hover,
  &:focus,
  &.active {
    color: ${theme.colors.bgColor}; // active
    background-color: ${theme.colors.blue}; // active
  }
`;
export const FirstStepFormItemInput = styled.input`
  display: none;
`;

// export {
//   AddPetFormStyled,
//   AddPetFormTitle,
//   StepTitlesContainer,
//   StepTitlesItems,
//   StepTitlesLine,
//   // AddPetContainerDiv,
// };
