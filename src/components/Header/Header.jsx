import React, { useState } from 'react';
import {
  // Auth,
  // AuthContainer,
  CrossButton,
  HeaderContainer,
  HeaderMenu,
  HeaderWrapper,
  IconOpenMenu,
  MenuButton,
  // UserNavContainer,
  // UserNavContainer,
} from './Header.styled';
import Logo from 'components/Logo/Logo';
import { Cross, MenuHamburger } from 'components/icons';
import { Nav } from 'components/Nav/Nav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn} from 'redux/auth/auth-selectors';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useWindowSize } from './useWindowSize';

export const Header = () => {
  // const user = useSelector(selectUser);
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const [click, setClick] = useState(false);
  const [screenWidth] = useWindowSize();


  const changeClick = () => {
    setClick(!click);
  };

 

  return (
    <HeaderContainer>
      <HeaderWrapper >
        <Logo onClick={() => changeClick()} />

        <HeaderMenu>         

          {screenWidth >= 768 && isLoggedIn && (<UserNav />) } 

          {screenWidth >= 768 && !isLoggedIn && (<AuthNav />)} 
          
          {screenWidth <= 1279 && (
               <IconOpenMenu onClick={() => changeClick()}>
               {click ? (
                 <CrossButton>
                   <Cross />
                 </CrossButton>
               ) : (
                 <MenuButton>
                   <MenuHamburger />
                 </MenuButton>
               )}
             </IconOpenMenu>
          )}



          <Nav click={click} onClick={() => changeClick()}  screenWidth={screenWidth} />
          
          
              
          
          
            
        </HeaderMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
