import {styled} from 'styled-components';
import imageBgMob from '../../images/background/bg-desktop@1x.png'
import { theme } from 'styles';

export const LoginContainer = styled.main`

margin: 0 auto;
padding:  0px 20px;
width: 320px;
/* background-color: ${theme.colors.white}; */
background-image: url(${imageBgMob});

@media screen and (min-width: 768px) {
    width: 768px;
    padding: 90px 32px 0 32px;
  }
@media screen and (min-width: 1281px) {
    width: 1280px;
    padding: 100px 16px 0 16px;
  }
`;