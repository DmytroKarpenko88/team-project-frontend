import { useEffect, useState } from 'react';
import { EditBtn, UserCardContainer } from './UserData.styled';
import LogoutBtn from 'components/Logout/LogoutBtn';
import { Cross, Edit } from 'components/icons';
import UserForm from '../UserForm/UserForm';
import { useAuth } from 'hooks/useAuth';

const UserData = () => {
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    setIsFormDisabled(true);
  }, [user]);

  return (
    <>
      <UserCardContainer>
        {isFormDisabled ? (
          <EditBtn onClick={() => setIsFormDisabled(false)}>
            <Edit />
          </EditBtn>
        ) : (
          <EditBtn onClick={() => setIsFormDisabled(true)}>
            <Cross />
          </EditBtn>
        )}
        <UserForm
          disabled={isFormDisabled}
          setIsFormDisabled={setIsFormDisabled}
        />
        {isFormDisabled && <LogoutBtn />}
      </UserCardContainer>
    </>
  );
};

export default UserData;
