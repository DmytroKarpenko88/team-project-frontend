import styled from 'styled-components';
import { theme } from 'styles';

//  ------- sex
export const ThirdStepSexDiv = styled.div`
  display: flex;
  gap: 16px;
  font-size: 16px;
  line-height: 1.5; /* 24px */
  letter-spacing: 0.64px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    // height: 182px;
    // margin-bottom: 16px;
  }
`;

export const ThirdStepSexPhotoDiv = styled.div`
  // display: flex;
  // gap: 16px;
  // font-size: 16px;
  // line-height: 1.5; /* 24px */
  // letter-spacing: 0.64px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    // height: 182px;
    // margin-bottom: 16px;
  }
`;

export const ThirdStepSexTitle = styled.h3`
  color: ${theme.colors.black}; // #111111
  font-family: ${theme.fonts.main.medium}; // Manrope 500
  font-weight: 500;
  font-size: ${theme.fontSizes.s}; //14px;
  font-style: normal;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.l}; //20px;
  }
`;
export const ThirdStepSexInput = styled.input`
  display: none;
`;
export const ThirdStepSexFemaleLabel = styled.label`
  margin-top: 8px;
  margin-bottom: 16px;

  svg {
    margin-right: 12px;
    stroke: ${theme.colors.red};
  }

  &:hover,
  &:focus,
  &:active {
    margin-top: 3px;
    margin-bottom: 10px;

    font-size: 14px;

    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};

    padding: 8px 16px;
    border-radius: 40px;

    svg {
      stroke: ${theme.colors.white};
    }
  }
`;
export const ThirdStepSexMaleLabel = styled.label`
  margin-top: 8px;
  margin-bottom: 16px;

  svg {
    margin-right: 12px;
  }

  &:hover,
  &:focus,
  &:active {
    margin-top: 3px;
    margin-bottom: 10px;

    font-size: 14px;

    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};

    padding: 8px 16px;
    border-radius: 40px;

    svg {
      stroke: ${theme.colors.white};
    }
  }
`;

// ------- form

export const ThirdStepFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    // font-size: 28px;
    // min-width: 704px;
    flex-direction: row;
    gap: 45px;
  }
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

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.325; //26.5px; /* 132.5% */
    gap: 8px;
    margin-bottom: 24px;
  }
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

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    // flex-direction: row-reverse;
    min-width: 395px;
  }
`;

// ------- photo

export const ThirdStepFormPhotoTitle = styled.label`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  height: 112px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    // height: 182px;
    margin-top: 40px;
    flex-direction: column;

    // margin-bottom: 16px;
  }
`;
export const ThirdStepFormPhotoDiv = styled.div`
  color: ${theme.colors.black}; // #111111
  font-family: ${theme.fonts.main.medium}; // Manrope 500
  font-weight: 500;
  font-size: ${theme.fontSizes.s}; //14px;
  font-style: normal;
  line-height: normal;
  width: 81px;

  // margin-top: 34px; // 50px
  // margin-bottom: 64px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    width: 100%;
  }
`;
export const ThirdStepFormImgInput = styled.input`
  opacity: 0; // chose file
  width: 0px;
  height: 0px; // 112px;
`;
export const ThirdStepFormPlus = styled.div`
  cursor: pointer;
  // overflow: hidden;

  svg {
    position: absolute;
    top: 42px;
    left: 145px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      top: 80px;
      left: 68px;

      width: 48px;
      height: 48px;
    }
  }

  &::after {
    position: absolute;
    content: '';
    opacity: 0.7;
    top: 0px; // -45px
    left: 103px;
    // z-index: 7;
    width: 112px;
    height: 112px;
    border-radius: 20px;
    background-color: ${theme.colors.blueLight}; //#cce4fb;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      top: 38px; // -45px
      left: 0px;
      width: 182px;
      height: 182px;
    }
  }
`;
export const ThirdStepFormImgPreview = styled.img`
  opacity: 0;
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

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    ${({ data, step }) =>
      data.option !== 'pet' && (data.option !== 'sell') & (step === 3)
        ? 'min-height: 182px;'
        : 'min-height: 92px;'};
  }
`;
