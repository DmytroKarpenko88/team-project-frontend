import Modal from 'react-bootstrap/Modal';
import {
  BtnLogin,
  BtnLogout,
  BtnWrapper,
  CrossBtn,
  InfoMessage,
  ModalContainer,
  Title,
} from './ModalAttention.styled';
import { Cross, Paw } from 'components/icons';

export const ModalAttention = props => {
  return (
    <ModalContainer {...props} size="lg" centered={true}>
      <Modal.Body>
        <CrossBtn onClick={props.onHide}>
          <Cross />
        </CrossBtn>
        <Title>Attention</Title>

        <InfoMessage>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </InfoMessage>

        <BtnWrapper>
          <BtnLogin onClick={props.onHide}>
            <span>Log In</span>
            <span>
              <Paw />
            </span>
          </BtnLogin>

          <BtnLogout onClick={props.onHide}>
            <span>Registration</span>
          </BtnLogout>
        </BtnWrapper>
      </Modal.Body>
    </ModalContainer>
  );
};
