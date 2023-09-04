import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserData from 'components/UserCard/UserData/UserData';
import {
  AddPetBtn,
  MainContainer,
  PetsContainer,
  Title,
} from 'components/UserCard/UserData/UserData.styled';
import PetsData from 'components/UserCard/PetsData/PetsData';
import { PlusSmall } from 'components/icons';
import { ModalCongrats } from 'components/Modals';
import { fetchPets } from 'redux/pets/pets-operations';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';

const User = () => {
  const [modalCongratsShow, setModalCongratsShow] = useState(true);

  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading, isRegistered, user } = useAuth();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {isRegistered && modalCongratsShow && (
        <ModalCongrats
          show={modalCongratsShow}
          onHide={() => setModalCongratsShow(false)}
        />
      )}

      {isLoggedIn && user && (
        <MainContainer>
          <div>
            <Title>My information:</Title>
            {user && <UserData />}
          </div>

          <div style={{ width: '100%' }}>
            <PetsContainer>
              <Title>My pets:</Title>
              <AddPetBtn to="/add-pet" state={{ from: `${location.pathname}` }}>
                Add Pet <PlusSmall />
              </AddPetBtn>
            </PetsContainer>
            <PetsData />
          </div>
        </MainContainer>
      )}
    </>
  );
};

export default User;
