import styled from 'styled-components';
import { theme } from 'styles';

import BegD1 from '../../images/background/bg-desktop@1x.png';
import BegD2 from '../../images/background/bg-desktop@2x.png';
import BegM1 from '../../images/background/bg-mobile@1x.png';
import BegM2 from '../../images/background/bg-mobile@2x.png';
import BegT1 from '../../images/background/bg-tablet@1x.png';
import BegT2 from '../../images/background/bg-tablet@2x.png';

export const BackgroundWrapperImage = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-image: url('${BegM1}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${BegM2}');
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100vw;
    height: 100vh;
    background-image: url('${BegT1}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${BegT2}');
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 100vh;
    background-image: url('${BegD1}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${BegD2}');
    }
  }
`;
