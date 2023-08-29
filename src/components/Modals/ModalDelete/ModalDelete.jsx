import Modal from 'react-bootstrap/Modal';
import {
  BtnCancel,
  BtnWrapper,
  BtnYes,
  CrossBtn,
  InfoMessage,
  ModalContainer,
  Title,
} from './ModalDelete.styled';
import { Cross, Trash } from 'components/icons';

export const ModalDelete = props => {
  return (
    <ModalContainer {...props} size="lg" centered={true}>
      <Modal.Body>
        <CrossBtn onClick={props.onHide}>
          <Cross />
        </CrossBtn>
        <Title>Delete adverstiment?</Title>

        <InfoMessage>
          Are you sure you want to delete <b>“Cute dog looking for a home”?</b>{' '}
          <br />
          You can`t undo this action.
        </InfoMessage>

        <BtnWrapper>
          <BtnCancel onClick={props.onHide}>
            <span>Cancel</span>
          </BtnCancel>

          <BtnYes onClick={props.onHandleDelete}>
            <span>Yes</span>
            <span>
              <Trash />
            </span>
          </BtnYes>
        </BtnWrapper>
      </Modal.Body>
    </ModalContainer>
  );
};
