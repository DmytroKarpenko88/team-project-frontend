import UserData from 'components/UserCard/UserData/UserData';
import {
  MainContainer,
  Title,
} from 'components/UserCard/UserData/UserData.styled';

const User = () => {
  return (
    <>
      <MainContainer>
        <div>
          <Title>My information:</Title>
          <UserData />
        </div>
      </MainContainer>
    </>
  );
};

export default User;
