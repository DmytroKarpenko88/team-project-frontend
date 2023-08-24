import Modal from 'react-bootstrap/Modal';
import { ButtonGoToProfile, ModalContainer } from './ModalCongrats.styled';
import { Paw } from 'components/icons';

export const ModalCongrats = props => {
  return (
    <ModalContainer {...props} centered={true}>
      <Modal.Body>
        <h2>Congrats!</h2>

        <p>Youre registration is success</p>

        <ButtonGoToProfile onClick={props.onHide}>
          <span>Go to profile</span>
          <span>
            <Paw />
          </span>
        </ButtonGoToProfile>
      </Modal.Body>
    </ModalContainer>
  );
};
