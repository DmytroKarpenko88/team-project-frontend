import { useState } from 'react';
import { useSelector } from 'react-redux';
import UserData from 'components/UserCard/UserData/UserData';
import {
  AddPetBtn,
  MainContainer,
  PetsContainer,
  Title,
} from 'components/UserCard/UserData/UserData.styled';
import PetsData from 'components/UserCard/PetsData/PetsData';
import { PlusSmall } from 'components/icons';
import { selectIsRegistered } from 'redux/auth/auth-selectors';
import { ModalCongrats } from 'components/Modals';

const User = () => {
  const [modalCongratsShow, setModalCongratsShow] = useState(true);
  const isRegistered = useSelector(selectIsRegistered);

  const click = () => {
    console.log('click');
  };

  return (
    <>
      {isRegistered && modalCongratsShow && (
        <ModalCongrats
          show={modalCongratsShow}
          onHide={() => setModalCongratsShow(false)}
        />
      )}

      <MainContainer>
        <div>
          <Title>My information:</Title>
          <UserData />
        </div>

        <div style={{ width: '100%' }}>
          <PetsContainer>
            <Title>My pets:</Title>
            <AddPetBtn to="/add-pet" onClick={click}>
              Add Pet <PlusSmall />
            </AddPetBtn>
          </PetsContainer>
          <PetsData />
        </div>
      </MainContainer>
    </>
  );
};

export default User;
