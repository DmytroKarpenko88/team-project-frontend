import styled from 'styled-components';
import { theme } from 'styles';

const AddPetForm = styled.form``;

const AddPetFormTitle = styled.h2`
  padding: 20px;
  line-height: normal;
  font-size: ${theme.fontSizes.l}; //20px
  color: ${theme.colors.black};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 28px;
  }
`;

const StepTitlesContainer = styled.ul`
  margin-top: 24px;
`;

const StepTitlesItems = styled.li`
  // position: relative;
  list-style: none;
  display: inline-block;
  text-align: start;
  min-width: 80px;

  font-style: normal;
  font-size: 10px;
  line-height: 26.5px;
  color: ${theme.colors.grey};

  &:first-child {
    margin-right: 12px;
  }

  &:nth-child(2) {
    margin-right: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

const StepTitlesLine = styled.div`
  // position: absolute;
  margin-top: 12px;
  // top: 26px;
  // left: 0;
  // background-color: #cce4fb;
  // border-radius: 8px;
  // width: 80px;
  // height: 8px;
`;
// const AddPetForm = styled.form``;
// const AddPetForm = styled.form``;

export {
  AddPetForm,
  AddPetFormTitle,
  StepTitlesContainer,
  StepTitlesItems,
  StepTitlesLine,
};
