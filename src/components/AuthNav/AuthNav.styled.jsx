import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';


export const Auth = styled.div`
@media (min-width: 768px) {
    display: flex;
    margin-right: 24px;
  }

@media screen and (min-width: 1281px) {
    margin-right: 18px;
  }
`;



export const LinkRegister = styled(NavLink)`
display: block;
font-family: ${theme.fonts.main.semiBold};
width: 165px;
height: 40px;
padding: 6px 20px;
color: ${theme.colors.white};
border: solid 2px ${theme.colors.yellow};
border-radius: 40px;
background-color: ${theme.colors.yellow};
&:focus {
color: ${theme.colors.yellow};
background-color: ${theme.colors.white};
};

@media (min-width: 768px) {
  }
`;



export const LinkLogin = styled(NavLink)`
display: block;
font-family: ${theme.fonts.main.semiBold};
padding: 6px 20px;
width: 165px;
height: 40px;
margin-bottom: 15px;
color: ${theme.colors.white};
border: solid 2px ${theme.colors.yellow};
border-radius: 40px;
background-color: ${theme.colors.yellow};
svg {
    fill: ${theme.colors.white};
    margin-left: 8px;
    margin-bottom: 2px;
  };

&:focus {
color: ${theme.colors.yellow};
background-color: ${theme.colors.white};
svg {
    fill: ${theme.colors.yellow};
  }
};

@media (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

export const Text = styled.p`
text-align: center;
`;



