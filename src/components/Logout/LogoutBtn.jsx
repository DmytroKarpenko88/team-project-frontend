import { useState } from 'react';
import { Logout } from '../icons/index';
import { LogoutBtnStyled } from './Logout.styled';

const LogoutBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);
  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
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
