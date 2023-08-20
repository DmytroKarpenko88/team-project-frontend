import React, { useState } from 'react'
import {
  Auth,
  AuthContainer,
  CrossButton,
  IconOpenMenu,
  Menu,
  MenuButton,
  NavbarContainer,
  NavbarWrapper
} from './Header.styled'
import Logo from 'components/Logo/Logo'
import { Cross, MenuHamburger } from 'components/icons'
import { Nav } from 'components/Nav/Nav'



export const Header = () => {
  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  }

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo onClick={() => changeClick()}/>
        
        <Menu>
          <AuthContainer>
            <Auth />
          </AuthContainer>
          
          
        <IconOpenMenu onClick={() => changeClick()}>
          {click ? <CrossButton><Cross /></CrossButton> : <MenuButton><MenuHamburger/></MenuButton> }
        </IconOpenMenu>
        
          <Nav click={click } onClick={() => changeClick()}/>  
        </Menu>
             
        
      </NavbarWrapper>      
   </NavbarContainer>
  )
}











