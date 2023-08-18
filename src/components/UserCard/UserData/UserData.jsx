import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { LiaTimesSolid } from 'react-icons/lia';
import { EditBtn, UserCardContainer } from './UserData.styled';
import Logout from 'components/Logout/Logout';

const UserData = () => {
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  // const { user } = useAuth;

  // useEffect(() => {
  //   setIsFormDisabled(true)
  // }, [user])

  return (
    <>
      <UserCardContainer>
        {isFormDisabled ? (
          <EditBtn onClick={() => setIsFormDisabled(false)}>
            <BiEditAlt />
          </EditBtn>
        ) : (
          <EditBtn onClick={() => setIsFormDisabled(true)}>
            <LiaTimesSolid />
          </EditBtn>
        )}
        {isFormDisabled && <Logout />}
      </UserCardContainer>
    </>
  );
};

export default UserData;
