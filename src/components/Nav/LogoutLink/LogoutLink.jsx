import React from 'react';
import {Logout} from '../../icons/index';
import { LogOut,  Text } from './LogoutLink.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';


export  const LogoutLink = () => {
  const dispatch = useDispatch();

  const goOut = () => {    
    dispatch(logOut());
  };


  return (
  <LogOut onClick={goOut}>
    <Logout />
    <Text>
      Logout
    </Text>
   </LogOut>
    
    
   
     
      
          
       
      )}
    