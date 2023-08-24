import { useState } from 'react';
import { Logout } from '../icons/index';
import { LogoutBtnStyled } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const LogoutBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  console.log(isModalOpen);
  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
    dispatch(logOut());
  };

  return (
    <div style={{ marginTop: '25px' }}>
      <LogoutBtnStyled type="button" onClick={closeModal}>
        <Logout />
        Log Out
      </LogoutBtnStyled>
    </div>
  );
};

export default LogoutBtn;
