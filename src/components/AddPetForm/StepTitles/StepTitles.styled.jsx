import styled from 'styled-components';
import { theme } from 'styles';

// --------  StepTitles

export const StepTitlesContainer = styled.ul`
  // margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
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

  &.current {
    color: ${theme.colors.blue};
  }

  &.previous {
    color: ${theme.colors.green};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 120px;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.65625; // 26.5px; /* 165.625% */
  }
`;

export const StepTitlesLine = styled.div`
  margin-top: 12px;
  background-color: ${theme.colors.blueLight};
  border-radius: 8px;
  width: 80px;
  height: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 120px;
  }

  &.current {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.blue};
  }
  &.previous {
    background-color: ${theme.colors.green};
    color: ${theme.colors.green};
  }
`;
