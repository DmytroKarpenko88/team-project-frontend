import Modal from 'react-bootstrap/Modal';
import {
  BtnCancel,
  BtnWrapper,
  BtnYes,
  CrossBtn,
  ModalContainer,
  Title,
} from './ModalApproveAction.styled';
import { Cross, Logout } from 'components/icons';

export const ModalApproveAction = props => {
  return (
    <ModalContainer {...props} size="lg" centered={true}>
      <Modal.Body>
        <CrossBtn onClick={props.onHide}>
          <Cross />
        </CrossBtn>
        <Title>Already leaving?</Title>

        <BtnWrapper>
          <BtnCancel onClick={props.onHide}>
            <span>Cancel</span>
          </BtnCancel>

          <BtnYes onClick={props.onHide}>
            <span>Yes</span>
            <span>
              <Logout />
            </span>
          </BtnYes>
        </BtnWrapper>
      </Modal.Body>
    </ModalContainer>
  );
};
