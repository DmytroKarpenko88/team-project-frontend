import React from 'react';
import {
//   AuthContainerMobile,
  NavMenu,
  NavMenuItemLink,
    NavMenuItem,
    UserNavContainerMobile,
    AuthContainerMobile,
    LogoutButton,
} from './Nav.styled';
// import { AuthNav } from 'components/AuthNav/AuthNav'
import { UserNav } from 'components/UserNav/UserNav'
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import LogoutBtn from 'components/Logout/LogoutBtn'


export const Nav = ({click, onClick}) => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
    
    return (
    
        <NavMenu click={click}>
            {isLoggedIn && <LogoutButton>
                <LogoutBtn/>
            </LogoutButton>}
            
            <NavMenuItem onClick={onClick}>
                <NavMenuItemLink to="/friends">
                    Our friends
                </NavMenuItemLink>
            </NavMenuItem>
            
            <NavMenuItem onClick={onClick}>
                <NavMenuItemLink to="/notices/sell">
                    Find pet
                </NavMenuItemLink>
            </NavMenuItem>
  
            <NavMenuItem onClick={onClick}>
                <NavMenuItemLink to="/news">
                    News
                </NavMenuItemLink>
            </NavMenuItem>

            <>{ isLoggedIn ? (<UserNavContainerMobile onClick={onClick}>
                <UserNav />
            </UserNavContainerMobile>) :  (<AuthContainerMobile onClick={onClick}>
                <AuthNav/>
            </AuthContainerMobile>)}</>


            {/* { isLoggedIn &&  <UserNavContainerMobile onClick={onClick}>
                <UserNav />
            </UserNavContainerMobile>}

            { !isLoggedIn && <AuthContainerMobile onClick={onClick}>
                <AuthNav/>
            </AuthContainerMobile>} */}
            
            {/* <AuthNav/> */}

            {/* <UserNav/> */}

            
        </NavMenu> 
        
    )
}
