import { styled } from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { theme } from 'styles';

export const ModalContainer = styled(Modal)`
  .modal-content {
    border: none;
    border-radius: 20px;
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

    align-items: center;
  }
`;

export const CrossBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    right: 24px;
    top: 24px;
  }
`;

export const Title = styled.h2`
  margin: 60px 40px 0;
  max-width: 200px;
  text-align: center;
  font-size: 24px;
  line-height: normal;
  letter-spacing: 0.96px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 288px;
    font-size: 28px;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

export const InfoMessage = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 14px;
  padding: 0 20px;

  line-height: 18px;
  letter-spacing: 0.56px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 40px;
    padding: 0 105px;

    font-family: ${theme.fonts.main.medium};

    font-size: 16px;

    line-height: normal;
    letter-spacing: -0.16px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 44px;
  margin-bottom: 60px;

  transition: all ${theme.transition.main};


  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const BtnCancel = styled.button`
  display: flex;
  gap: 8px;
  border: 2px solid ${theme.colors.blue};
  background: ${theme.colors.white};
  border-radius: 40px;
  width: 256px;
  height: 40px;

  justify-content: center;
  align-items: center;

  color: ${theme.colors.blue};
  font-family: ${theme.fonts.main.semiBold};
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 165px;
  }

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
    color: ${theme.colors.white};
    border: none;
    svg {
      fill: ${theme.colors.white};
    }
  }
`;

export const BtnYes = styled.button`
  display: flex;
  gap: 8px;

  background: ${theme.colors.blue};
  border-radius: 40px;
  width: 256px;
  height: 40px;

  justify-content: center;
  align-items: center;

  color: ${theme.colors.white};
  font-family: ${theme.fonts.main.semiBold};
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;

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
    width: 165px;
  }
`;
