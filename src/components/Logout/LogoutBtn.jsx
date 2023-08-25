import { useState } from 'react';
import { Logout } from '../icons/index';
import { LogoutBtnStyled } from './Logout.styled';
import { ModalApproveAction } from 'components/Modals';

const LogoutBtn = () => {
  const [modalApproveActionShow, setModalApproveActionShow] = useState(false);

  const closeModal = () => {
    setModalApproveActionShow(prevState => !prevState);
  };

  return (
    <div style={{ marginTop: '25px' }}>
      <LogoutBtnStyled type="button" onClick={closeModal}>
        <Logout />
        Log Out
      </LogoutBtnStyled>
      {modalApproveActionShow && (
        <ModalApproveAction
          show={modalApproveActionShow}
          onHide={() => setModalApproveActionShow(false)}
        />
      )}
    </div>
  );
};

export default LogoutBtn;
