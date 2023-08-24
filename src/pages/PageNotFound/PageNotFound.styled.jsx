import { styled } from 'styled-components';
import catmobile from 'images/NotFound/catmobile.png';

export const ContainerPg = styled.div`
  max-width: 767px;
  height: 512px;
  padding-top: 71px;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${catmobile});
  background-repeat: no-repeat;
  background-position: top -200px left 100px;
`;

export const H1Text = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
`;

export const BgImg = styled.div`
  width: 292px;
  height: 170px;
  margin-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 100px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
