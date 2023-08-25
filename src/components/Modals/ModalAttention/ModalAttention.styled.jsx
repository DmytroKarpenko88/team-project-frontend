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
  margin-top: 60px;

  text-align: center;
  font-size: 24px;
  line-height: normal;
  letter-spacing: 0.96px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 36px;
    letter-spacing: 1.44px;
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
  gap: 12px;
  margin-top: 40px;
  margin-bottom: 60px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const BtnLogin = styled.button`
  display: flex;

  width: 240px;
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

export const BtnLogout = styled.button`
  display: flex;

  width: 240px;
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
