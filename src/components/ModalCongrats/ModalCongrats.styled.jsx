import { styled } from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { theme } from 'styles';

export const ModalContainer = styled(Modal)`
  .modal-dialog {
    margin: auto;
    width: calc(100% - 40px);

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 608px;
    }
  }
`;

export const ButtonGoToProfile = styled.button``;
