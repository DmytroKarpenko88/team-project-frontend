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
    }
  }

  .modal-dialog {
    margin: auto;

    max-width: calc(100% - 40px);

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      max-width: 608px;
    }
  }

  .modal-body {
    font-family: ${theme.fonts.main.medium};
    padding: 0;
    display: flex;
    flex-direction: column;

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

export const ImgBox = styled.div`
  margin: 44px auto 0;
  outline: 1px solid black;

  width: calc(100% - 40px);
  height: 240px;
  border-radius: 0 0 40px 40px;

  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin-top: 12px;
  width: 198px;

  font-size: 24px;
  font-family: ${theme.fonts.main.bold};
  line-height: normal;
  letter-spacing: -0.24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  gap: 8px;
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
`;
export const InfoValues = styled.span`
  font-family: ${theme.fonts.main.medium};
  font-size: 12px;
  line-height: normal;
`;

export const Contact = styled.a`
  font-family: ${theme.fonts.main.medium};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  &:hover,
  &:focus {
    color: ${theme.colors.yellow};
  }
`;

export const InfoMessage = styled.p`
  margin-top: 12px;
  font-family: ${theme.fonts.main.semiBold};
  font-size: 14px;

  line-height: normal;
  letter-spacing: 0.56px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 40px;

    font-family: ${theme.fonts.main.medium};

    margin-top: 40px;
    font-size: 20px;
    line-height: 28px;

    letter-spacing: 0.8px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 12px auto 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 20px;
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
    width: 165px;
  }

  svg {
    fill: ${theme.colors.yellow};
  }

  &:hover,
  &:focus {
    background: ${theme.colors.yellow};
    color: ${theme.colors.white};
    svg {
      fill: ${theme.colors.white};
    }
  }
`;

export const BtnAddTo = styled.button`
  display: flex;

  width: 240px;
  height: 40px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 2px solid ${theme.colors.yellow};
  border-radius: 40px;
  background: ${theme.colors.white};

  color: ${theme.colors.yellow};
  font-family: ${theme.fonts.main.semiBold};
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;

  &:hover,
  &:focus {
    background: ${theme.colors.yellow};
    color: ${theme.colors.white};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 165px;
  }
`;
