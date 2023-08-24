import styled from 'styled-components';
import { theme } from 'styles';

//  ------- sex
export const ThirdStepSexDiv = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 16px;
`;

export const ThirdStepSexTitle = styled.h3`
  color: ${theme.colors.black}; // #111111
  font-family: ${theme.fonts.main.medium}; // Manrope 500
  font-weight: 500;
  font-size: ${theme.fontSizes.s}; //14px;
  font-style: normal;
  line-height: normal;
`;

export const ThirdStepSexInput = styled.input`
  display: none;
`;
export const ThirdStepSexFemaleLabel = styled.label`
  svg {
    margin-right: 12px;
    stroke: ${theme.colors.red};

    &:hover,
    &:focus,
    &:active {
      stroke: ${theme.colors.white};
    }
  }

  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  }
`;
export const ThirdStepSexMaleLabel = styled.label`
  svg {
    margin-right: 12px;

    &:hover,
    &:focus,
    &:active {
      stroke: ${theme.colors.white};
    }
  }

  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  }

  }
`;

// ------- form

export const ThirdStepFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const ThirdStepFormTitle = styled.label`
  color: ${theme.colors.black}; // #111111
  font-family: ${theme.fonts.main.medium}; // Manrope 500
  font-weight: 500;
  font-size: ${theme.fontSizes.s}; //14px;
  font-style: normal;
  line-height: normal;

  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 20px;

  // color: ${theme.colors.black};

  // @media screen and (min-width: ${theme.breakpoints.tablet}) {
  //   font-size: 28px;
  // }
`;
export const ThirdStepFormInput = styled.input`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid ${theme.colors.blue};

  &:hover,
  &focus,
  &:active {
    border: 1px solid ${theme.colors.blue};
    outline: 1px solid ${theme.colors.blue};
  }

  // @media (min-width: 768px) {
  //   flex-direction: row-reverse;
  // }
`;

// ------- photo

export const ThirdStepFormPhotoTitle = styled.label`
  color: ${theme.colors.black}; // #111111
  font-family: ${theme.fonts.main.medium}; // Manrope 500
  font-weight: 500;
  font-size: ${theme.fontSizes.s}; //14px;
  font-style: normal;
  line-height: normal;
  width: 81px;

  display: block;
  position: relative;
  margin-top: 34px; // 50px
  margin-bottom: 64px;

  font-weight: 500;

  &::after {
    position: absolute;
    content: '';
    opacity: 0.7;
    top: -29px; // -45px
    left: 122px;
    z-index: 7;
    width: 112px;
    height: 112px;
    border-radius: 20px;
    background-color: #cce4fb;
  }

  // @media screen and (min-width: ${theme.breakpoints.tablet}) {
  //   font-size: 28px;
  // }
`;

export const ThirdStepFormImgInput = styled.input`
  opacity: 0;
`;

export const ThirdStepFormImgPreview = styled.img`
  opacity: 0;
  position: absolute;
  top: -45px;
  left: 122px;
  width: 112px;
  height: 112px;
  border-radius: 20px;
  z-index: 200;
  object-fit: cover;
  object-position: center;
`;
// ------ comments

export const ThirdStepFormComments = styled.textarea`
  min-height: 92px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.blue};

  &:hover,
  &focus,
  &:active {
    border: 1px solid ${theme.colors.blue};
    outline: 1px solid ${theme.colors.blue};
  }

  // @media (min-width: 768px) {
  //   flex-direction: row-reverse;
  // }
`;
