import { styled } from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { theme } from 'styles';

export const ModalContainer = styled(Modal)`
  .modal-content {
    border: none;
    border-radius: 20px;
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
  margin-top: 68px;

  text-align: center;
  font-size: 24px;
  line-height: normal;
  letter-spacing: 0.96px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 60px;
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const InfoMessage = styled.p`
  margin-top: 24px;
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 52px;
    font-size: 24px;
    letter-spacing: 0.96px;
  }
`;

export const ButtonGoToProfile = styled.button`
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;

  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 40px;
  background: ${theme.colors.blue};

  color: ${theme.colors.white};
  font-family: ${theme.fonts.main.semiBold};
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;

  svg {
    fill: ${theme.colors.white};
  }

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
    svg {
      fill: ${theme.colors.white};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 60px;
  }
`;
