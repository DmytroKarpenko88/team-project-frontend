import { useState } from 'react';
import { CiLogout } from 'react-icons/ci';
import { LogoutBtn } from './Logout.styled';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div style={{ marginTop: '25px' }}>
      <LogoutBtn type="button" onClick={closeModal}>
        <CiLogout />
        Log Out
      </LogoutBtn>
    </div>
  );
};

export default Logout;
