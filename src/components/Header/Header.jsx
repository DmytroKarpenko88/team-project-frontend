import React, { useState } from 'react';
import {
  Auth,
  AuthContainer,
  CrossButton,
  HeaderContainer,
  HeaderMenu,
  HeaderWrapper,
  IconOpenMenu,
  MenuButton,
} from './Header.styled';
import Logo from 'components/Logo/Logo';
import { Cross, MenuHamburger } from 'components/icons';
import { Nav } from 'components/Nav/Nav';

export const Header = () => {
  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo onClick={() => changeClick()} />

        <HeaderMenu>
          <AuthContainer>
            <Auth />
          </AuthContainer>

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

          <Nav click={click} onClick={() => changeClick()} />
        </HeaderMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
