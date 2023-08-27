import React from 'react';
import { Text, UserButton, UserIcon, UserLink } from './UserNav.styled';
import { useAuth } from 'hooks/useAuth';

export const UserNav = () => {
  const { user } = useAuth();
  //  console.log("user:", user)

  return (
    <UserLink to="/user">
      <UserButton>
        <UserIcon />
      </UserButton>
      <Text>{user.name}</Text>
    </UserLink>
  );
};
