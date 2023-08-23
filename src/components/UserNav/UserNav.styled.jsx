import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { User } from "components/icons"
import { Link } from 'react-router-dom';


export const UserLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
margin-bottom: 84px;
`

export const Text = styled.p`
color: ${theme.colors.yellow};
font-size: ${theme.fontSizes.m};
text-align: center;
`

export const UserIcon = styled(User)`
width: 28px;
height: 28px;
font-size: ${theme.fontSizes.m};
`

export const UserButton = styled.span`
margin-right: 12px;
svg {
    stroke: ${theme.colors.yellow};
    width: 28px;
    height: 28px;
  }

  &:hover,
  &:focus {
    stroke: ${theme.colors.blue};
  }
`

