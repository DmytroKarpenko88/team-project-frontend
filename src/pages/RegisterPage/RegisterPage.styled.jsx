import {styled} from 'styled-components';
import { theme } from 'styles';
import imageBgMob from '../../images/background/bg-desktop@1x.png'


export const RegisterContainer = styled.main`
padding: 0 20px;
margin: 0 auto;
width: 320px;
/* background-color: ${theme.colors.white}; */
background-image: url(${imageBgMob});

@media screen and (min-width: 768px) {
    width: 768px;
    padding: 60px 32px 0 32px;
  }
@media screen and (min-width: 1281px) {
    width: 1280px;
    // padding: 100px 16px 0 16px;
  }
`;