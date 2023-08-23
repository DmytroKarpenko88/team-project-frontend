import React from 'react';
import {
//   AuthContainerMobile,
  NavMenu,
  NavMenuItemLink,
    NavMenuItem,
    UserNavContainerMobile,
    LogoutButton,
} from './Nav.styled';
// import { AuthNav } from 'components/AuthNav/AuthNav'
import { UserNav } from 'components/UserNav/UserNav'
// import LogoutBtn from 'components/Logout/LogoutBtn'


export const Nav = ({click, onClick}) => {
    
    return (
    
        <NavMenu click={click}>
            {/* <LogoutButton>
                <LogoutBtn/>
            </LogoutButton> */}
            
            <NavMenuItem onClick={onClick}>
                <NavMenuItemLink to="/friends">
                    Our friends
                </NavMenuItemLink>
            </NavMenuItem>
            
            <NavMenuItem onClick={onClick}>
                <NavMenuItemLink to="/notice/sell">
                    Find pet
                </NavMenuItemLink>
            </NavMenuItem>
  
            <NavMenuItem onClick={onClick}>
                <NavMenuItemLink to="/news">
                    News
                </NavMenuItemLink>
            </NavMenuItem>
            
            {/* <AuthContainerMobile onClick={onClick}>
                <AuthNav />
            </AuthContainerMobile> */}

            <UserNavContainerMobile onClick={onClick}>
                <UserNav />
            </UserNavContainerMobile>
            
        </NavMenu> 
        
    )
}
