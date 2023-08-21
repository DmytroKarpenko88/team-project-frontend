import { styled } from 'styled-components';
// import { theme } from 'styles';
import imageBgMob1 from '../../images/background/bg-mobile@1x.png';
// import imageBgMob2 from '../../images/background/bg-mobile@2x.png'
import imageBgTab1 from '../../images/background/bg-tablet@1x.png';
// import imageBgTab2 from '../../images/background/bg-tablet@2x.png'
import imageBgDesc1 from '../../images/background/bg-desktop@1x.png';
// import imageBgDesc2 from '../../images/background/bg-desktop@2x.png'

export const RegisterContainer = styled.main`
  padding: 0px 20px 34px 20px;
  margin: 0 auto;
  width: 320px;
  background-image: url(${imageBgMob1});
  background-color: rgb(254, 249, 249);

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 80px 80px 159px 80px;
    background-image: url(${imageBgTab1});
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 80px 16px 75px 16px;
    background-image: url(${imageBgDesc1});
  }
`;
