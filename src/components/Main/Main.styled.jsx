import styled from 'styled-components';
import { theme } from 'styles';

import BegD1 from '../../images/background/bg-desktop@1x.png';
import BegD2 from '../../images/background/bg-desktop@2x.png';
import BegM1 from '../../images/background/bg-mobile@1x.png';
import BegM2 from '../../images/background/bg-mobile@2x.png';
import BegT1 from '../../images/background/bg-tablet@1x.png';
import BegT2 from '../../images/background/bg-tablet@2x.png';

import ImgDx1 from '../../images/MainPage/mp-desktop1x.webp';
import ImgDx2 from '../../images/MainPage/mp-desktop2x.webp';
import ImgMx1 from '../../images/MainPage/mp-mobile1x.webp';
import ImgMx2 from '../../images/MainPage/mp-mobile2x.webp';
import ImgTx1 from '../../images/MainPage/mp-tablet1x.webp';
import ImgTx2 from '../../images/MainPage/mp-tablet2x.webp';

export const Container = styled.div`
  position: relative;
  padding-top: 60px;
  background-image: url('${BegM1}');
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${BegM2}');
  }

  ${theme.breakpoints.tablet} {
    background-image: url('${BegT1}');
    padding-top: 80px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${BegT2}');
    }
  }

  ${theme.breakpoints.desktop} {
    background-image: url('${BegD1}');
    padding-top: 188px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${BegD2}');
    }
  }
`;
export const Images = styled.img`
  margin-top: 20px;
  content: url('${ImgMx1}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${ImgMx2}');
  }

  ${theme.breakpoints.tablet} {
    content: url('${ImgTx1}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${ImgTx2}');
    }
  }
  ${theme.breakpoints.desktop} {
    content: url('${ImgDx1}');
    position: absolute;
    right: 0;
    top: 36px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${ImgDx2}');
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  ${theme.breakpoints.tablet} {
    padding-left: 20px;
    width: 588px;
    font-size: 68px;
    font-weight: 600;
  }

  ${theme.breakpoints.desktop} {
    font-size: 68px;
    font-weight: 800;
  }
`;
