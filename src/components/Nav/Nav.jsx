import React from 'react';
import {
  AuthContainerMobile,
  NavMenu,
  NavMenuItemLink,
  NavMenuItem,
} from './Nav.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Nav = ({ click, onClick }) => {
  return (
    <NavMenu click={click}>
      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink to="friends">Our friends</NavMenuItemLink>
      </NavMenuItem>

      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink to="notices/sell">Find pet</NavMenuItemLink>
      </NavMenuItem>

      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink to="news">News</NavMenuItemLink>
      </NavMenuItem>

      <AuthContainerMobile onClick={onClick}>
        <AuthNav />
      </AuthContainerMobile>
    </NavMenu>
  );
};
