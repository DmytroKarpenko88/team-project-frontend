import React, { useEffect } from 'react';
import { FriendsPageContainer, Title } from './FriendsPage.styled';
import FriendsList from 'components/Friends/FriendsList';
import { useDispatch } from 'react-redux';
import { getAllFriends } from 'redux/friends/friends-operations';

const FriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFriends());
  }, [dispatch]);

  return (
    <FriendsPageContainer>
      <Title>Our friends</Title>
      <FriendsList />
    </FriendsPageContainer>
  );
};

export default FriendsPage;
