import Modal from 'react-bootstrap/Modal';
import {
  ButtonGoToProfile,
  CrossBtn,
  // InfoMessage,
  ModalContainer,
  Title,
} from './ModalAddPet.styled';
import { Cross, Paw } from 'components/icons';

export const ModalAddPet = props => {
  return (
    <ModalContainer {...props} size="lg" centered={true}>
      <Modal.Body>
        <CrossBtn onClick={props.onHide}>
          <Cross />
        </CrossBtn>
        <Title>Congrats! Your pet was successfuly added!</Title>

        {/* <InfoMessage>Your registration is successful</InfoMessage> */}

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

export default ModalAddPet;
