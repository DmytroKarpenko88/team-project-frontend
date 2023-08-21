import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';



export const NavMenu = styled.ul.withConfig({
    shouldForwardProp: prop => prop !== 'click',
  })`
// height: 100%;
display:flex;
justify-content: center;
align-items: center;
z-index: 0;

@media screen and (min-width: ${theme.breakpoints.desktop}){
    // margin-right: auto;
}

@media screen and (max-width: 767px){
    padding: 40px 70px 219px 70px;
    top: 25px;
}

@media screen and (min-width:768px ) and (max-width:1279px){
    top: 44px;
    padding: 94px 0 700px 0;
    

}


@media screen and (max-width: 1279px){
    width: 100%;
    heigh: 100vh;   
    position: absolute;    
    left: 0;
    flex-direction: column-reverse;
    display: ${({click})=> click ? "visible" : "none"};
    
    text-align: center;
    transition: 0.1s all ease-in;
    background-color: ${theme.colors.bgColor}
}


`


export const NavMenuItem = styled.li`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 1199px){
    text-align: center;

    &:not(:first-child){
        margin-bottom: 60px;
    }
    
}


@media screen and (max-width: 767px){
    text-align: center;

    &:not(:first-child){
        margin-bottom: 20px;
    }
    
}
`



export const NavMenuItemLink = styled(Link)`
color: ${theme.colors.black};
font-size: ${theme.fontSizes.l};
text-decoration: none;
margin-right: 40px;

@media screen and (max-width: 1199px) {
    margin:0;
    font-size: 32px;

}

&:hover, :focus{
    color: ${theme.colors.yellow};
    transition: 0.2s ease-in;
}
`

export const AuthContainerMobile = styled.div`
@media screen and (min-width: 768px){
    display: none;
}

@media screen and (max-width: 767px){
    margin-bottom: 40px;
    display: visible;
}
`