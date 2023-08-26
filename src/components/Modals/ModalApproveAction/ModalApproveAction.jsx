import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import {
  BtnCancel,
  BtnWrapper,
  BtnYes,
  CrossBtn,
  ModalContainer,
  Title,
} from './ModalApproveAction.styled';
import { Cross, Logout } from 'components/icons';
import { logOut } from 'redux/auth/auth-operations';

export const ModalApproveAction = props => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

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

          <BtnYes onClick={handleLogout}>
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
