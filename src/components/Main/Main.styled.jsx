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

export const Background = styled.div`
  height: 100%;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  background-image: url(${BegM1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BegM2});
  }
  ${theme.breakpoints.tablet} {
    display: inherit;
    background-image: url(${BegT1});
    width: 768px;
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BegT2});
  }

  ${theme.breakpoints.desktop} {
    background-image: url(${BegD1});
    display: inherit;
    width: 1280px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BegD2});
    }
  }
`;

export const Page = styled.div`
  height: 100vh;
  width: 320px;

  background-image: url(${ImgMx1});
  background-repeat: no-repeat;
  background-size: 205px auto;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${ImgMx2});
  }

  ${theme.breakpoints.tablet} {
    height: 100vh;
    width: 768px;
    background-image: url(${ImgTx1});
    background-size: 426px auto;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${ImgTx2});
  }

  ${theme.breakpoints.desktop} {
    background-image: url(${ImgDx1});
    background-size: 426px auto;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${ImgDx2});
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  ${theme.breakpoints.tablet} {
    display: inherit;
  }
`;
export const Title = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  font-size: 32px;
  color: #000000;
  padding-top: 60px;
  padding-bottom: 20px;

  ${theme.breakpoints.tablet} {
    font-size: 68px;
    line-height: 100px;
    padding-top: 80px;
    width: 588px;
    margin-left: 32px;
  }
  ${theme.breakpoints.desktop} {
    position: absolute;
    width: 501px;
    height: 264px;
    font-weight: 800;
    margin-left: 32px;
    padding-top: 188px;
    line-height: 88.4px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
