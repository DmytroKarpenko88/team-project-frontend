import React from 'react';
import { Text, UserButton, UserIcon, UserLink,  } from './UserNav.styled';
import { selectUser } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';



export const UserNav = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
   
        
      <UserLink to="/user">
          <UserButton><UserIcon /></UserButton>
          <Text>
             {user.name}   
          </Text>
       </UserLink>
          
       
      )}
    