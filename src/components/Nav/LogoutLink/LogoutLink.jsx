import React, { useState } from 'react';
import { Logout } from '../../icons/index';
import { LogOut, Text } from './LogoutLink.styled';
import { ModalApproveAction } from 'components/Modals';

export const LogoutLink = () => {
  const [modalApproveActionShow, setModalApproveActionShow] = useState(false);

  // const dispatch = useDispatch();

  const goOut = () => {
    setModalApproveActionShow(prevState => !prevState);
  };

  return (
    <>
      <LogOut onClick={goOut}>
        <Text>Log out</Text>
        <Logout />
      </LogOut>
      {modalApproveActionShow && (
        <ModalApproveAction
          show={modalApproveActionShow}
          onHide={() => setModalApproveActionShow(false)}
        />
      )}
    </>
  );
};
