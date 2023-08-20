import React from 'react'
import {
  AuthContainerMobile,
  NavMenu,
  MenuItem,
  MenuItemLink,
} from './Nav.styled'
import { AuthNav } from 'components/AuthNav/AuthNav'




export const Nav = ({click, onClick}) => {
    
    return (
    
        <NavMenu click={click}>
            <MenuItem onClick={onClick}>
                <MenuItemLink to="/friends">
                    Our friends
                </MenuItemLink>
            </MenuItem>
            
            <MenuItem onClick={onClick}>
                <MenuItemLink to="/notice">
                    Find pet
                </MenuItemLink>
            </MenuItem>
  
            <MenuItem onClick={onClick}>
                <MenuItemLink to="/news">
                    News
                </MenuItemLink>
            </MenuItem>
            
            <AuthContainerMobile onClick={onClick}>
                <AuthNav />
            </AuthContainerMobile>
            
        </NavMenu> 
    )
}