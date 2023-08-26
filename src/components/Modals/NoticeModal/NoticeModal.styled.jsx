import { styled } from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { theme } from 'styles';

export const ModalContainer = styled(Modal)`
  .modal-content {
    border: none;
    border-radius: 20px;
    padding: 0 12px;
    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      border-radius: 40px;
      padding: 0;
      height: 540px;
    }
  }

  .modal-dialog {
    margin: auto;

    max-width: calc(100% - 40px);

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 681px;
    }
  }

  .modal-body {
    font-family: ${theme.fonts.main.medium};
    padding: 0;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      padding: 32px 32px 24px;
    }

    /* align-items: center; */
  }
`;

export const CrossBtn = styled.button`
  position: absolute;
  right: 0;
  top: 12px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    right: 24px;
    top: 24px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-top: 44px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    margin-top: 0;
    gap: 24px;
  }
`;

export const ImgBox = styled.div`
  width: calc(100% - 16px);
  margin: 0 auto;
  height: 240px;
  border-radius: 0 0 40px 40px;
  overflow: hidden;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`;

export const CategoryName = styled.span`
  position: absolute;
  margin-top: 16px;
  width: 126px;
  height: 32px;
  background-color: ${theme.colors.blueLight};
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  padding-left: 12px;

  font-size: 14px;
  font-family: ${theme.fonts.main.medium};
  line-height: normal;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  width: 198px;

  font-size: 24px;
  font-family: ${theme.fonts.main.bold};
  line-height: normal;
  letter-spacing: -0.24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 250px;
    font-size: 28px;

    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

export const Container = styled.div`
  display: flex;
  padding-top: 8px;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 20px;
  }
`;

export const Info = styled.p`
  display: flex;
  align-items: flex-end;
`;

export const InfoName = styled.span`
  width: 81px;
  font-family: ${theme.fonts.main.semiBold};
  font-size: 14px;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const InfoValues = styled.span`
  font-family: ${theme.fonts.main.medium};
  font-size: 12px;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const Contact = styled.a`
  font-family: ${theme.fonts.main.medium};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.yellow};
  }
`;

export const InfoMessage = styled.p`
  margin-top: 12px;
  font-family: ${theme.fonts.main.medium};
  font-size: 14px;

  line-height: normal;
  letter-spacing: 0.56px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 28px;

    font-family: ${theme.fonts.main.medium};
    font-size: 16px;
    line-height: 28px;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 12px auto 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    gap: 17px;
    position: absolute;
    bottom: 0;
    right: 32px;
  }
`;

export const BtnContact = styled.button`
  display: flex;

  width: 256px;
  height: 40px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 2px solid ${theme.colors.blue};
  border-radius: 40px;
  background: ${theme.colors.white};

  color: ${theme.colors.blue};
  font-family: ${theme.fonts.main.bold};
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;
  transition: color ${theme.transition.duration} ${theme.transition.main};
  transition: fill ${theme.transition.duration} ${theme.transition.main};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 129px;
  }

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
    color: ${theme.colors.white};
    border: none;
  }
`;

export const BtnAddTo = styled.button`
  display: flex;

  width: 256px;
  height: 40px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: ${theme.colors.blue};

  color: ${theme.colors.white};
  font-family: ${theme.fonts.main.bold};
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;
  transition: color ${theme.transition.duration} ${theme.transition.main};
  transition: fill ${theme.transition.duration} ${theme.transition.main};

  svg {
    stroke: ${theme.colors.white};
  }

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
    color: ${theme.colors.white};

    svg {
      stroke: ${theme.colors.white};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 129px;
  }
`;
