import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllFriends } from 'redux/friends/friends-selectors';
import { FriendsListContainer, FriendsListItem } from './FriendsList.styled';
import FriendsItem from './FriendsItem';

const FriendsList = () => {
  const friends = useSelector(selectAllFriends);
  return (
    <FriendsListContainer>
      <FriendsListItem>
        {friends ? (
          friends.map(friend => (
            <FriendsItem key={friends._id} friends={friend} />
          ))
        ) : (
          <p>No friends</p>
        )}
      </FriendsListItem>
    </FriendsListContainer>
  );
};

export default FriendsList;
