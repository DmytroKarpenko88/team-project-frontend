import styled from 'styled-components';

import Bgm from '../../images/MainPage/mp-mobile1x.webp';

export const Background = styled.section`
  height: 100%;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  background-image: url(${Bgm});
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  @media screen and (min-width: 768px) {
    display: inherit;
  }
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  font-size: 32px;
  color: #000000;
  padding-top: 60px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 100px;
    padding-top: 80px;
    width: 588px;
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    width: 501px;
    height: 264px;
    font-weight: 800;
  }
`;

export const Page = styled.div``;
export const Wrapper = styled.div``;
