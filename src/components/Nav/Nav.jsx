import React from 'react';
import {
  NavMenu,
  NavMenuItemLink,
  NavMenuItem,
  UserNavContainerMobile,
  AuthContainerMobile,
  LogoutButtnMobile,
  
} from './Nav.styled';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import {  selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { LogoutLink } from './LogoutLink/LogoutLink';

export const Nav = ({ click, onClick }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    

  return (
    <NavMenu click={click}>
      {isLoggedIn && (
        <LogoutButtnMobile onClick={onClick}>
                  <LogoutLink/>
        </LogoutButtnMobile>
                  
      
          
        
      )}

      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink to="/friends">Our friends</NavMenuItemLink>
      </NavMenuItem>

      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink to="/notices/sell">Find pet</NavMenuItemLink>
      </NavMenuItem>

      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink to="/news">News</NavMenuItemLink>
      </NavMenuItem>

      <>
        {isLoggedIn ? (
          <UserNavContainerMobile onClick={onClick}>
                      
            <UserNav />
          </UserNavContainerMobile>
        ) : (
          <AuthContainerMobile onClick={onClick}>
            <AuthNav />
          </AuthContainerMobile>
        )}
      </>

    </NavMenu>
  );
};
