import { styled } from 'styled-components';
import cattablet from 'images/NotFound/cattablet.png';
import { theme } from 'styles';
import cattablet2x from 'images/NotFound/cattablet2x.png';
import catmobile from 'images/NotFound/catmobile.png';
import catmobile2x from 'images/NotFound/catmobile2x.png';
import { Link } from 'react-router-dom';

export const ContainerPg = styled.div`
  width: 100%;
  height: 772px;
  padding-top: 80px;
  padding-bottom: 275px;
  margin-left: auto;
  margin-right: auto;

  background-repeat: no-repeat;
  background-position: top -200px left 100px;
`;

export const H1Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  line-height: 32.78px;

  color: #000000;
  padding-bottom: 80px;

  @media (min-width: 320px) {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;

    @media (min-width: 1280px) {
      font-weight: 600;
      font-size: 32px;
    }
  }
`;

export const PicContainer = styled.div`
  position: relative;
  //width:280px;
  height: 123px;

  align-items: center;
  display: flex;
  justify-content: center;
  line-height: 130%;
  padding-bottom: 60px;
`;

export const Image = styled.img`
  display: flex;
  height: 115px;
  content: url('${catmobile}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${catmobile2x}');
  }
  /* height: 360px; */
  @media screen and (max-width: 320px) {
    content: url('${cattablet}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dpi) {
      content: url('${cattablet2x}');
    }
  }
`;

export const Button = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  width: 248px;
  height: 38px;
  padding: 6px 28px;
  margin: 50px auto;
  border-radius: 46px;
  background-color: #54adff;
  color: white;
  font-size: 16px;
  text-decoration: none;
  svg {
    fill: ${theme.colors.white};
  }

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
    svg {
      fill: ${theme.colors.white};
    }
  }
`;
