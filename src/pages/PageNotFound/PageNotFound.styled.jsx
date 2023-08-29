import { styled } from 'styled-components';
import cattablet from 'images/NotFound/cattablet.png';
import { theme } from 'styles';
import cattablet2x from 'images/NotFound/cattablet2x.png';
import catmobile from 'images/NotFound/catmobile.png';
import catmobile2x from 'images/NotFound/catmobile2x.png';
import { Link } from 'react-router-dom';
import catdesktop from 'images/NotFound/catdesktop.png';
import catdesktop2x from 'images/NotFound/catdesktop2x.png';


export const ContainerPg = styled.div`
  width: 100%;
  height: 100vh;
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

  @media (min-width: 768px) {
    width: 768px;
    margin: 80px auto;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;

  }
    @media (min-width: 1280px) {
      width: 450px;
      font-weight: 600;
      font-size: 32px;
      line-height: 42px;
    }
  
`;

export const PicContainer = styled.div`
  //position: relative;
 
  //height: 123px;
  align-items: center;
  display: flex;
  justify-content: center;
  //line-height: 130%;
  //padding-bottom: 60px;

  //@media screen and (min-width: 768px) {

 // }
`;

export const Image = styled.img`
  display: flex;
  width: 280px;
  height: 123px;
  content: url('${catmobile}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${catmobile2x}');
  }
  @media screen and (min-width: ${theme.breakpoints.tablet})  {
    width: 704px;
    bottom: 112px;
    right: 410px;
    height: 308px; 
    content: url('${cattablet}');

     @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dpi) {
      content: url('${cattablet2x}');
    } 
  }
  @media screen and (min-width:${theme.breakpoints.desktop}){
    width:822px;
    height: 360px;
    content: url('${catdesktop}');
    @media (min-devise-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dpi) {
      content: url('${catdesktop2x}');
      }
    }
`;

export const Button = styled(Link)`

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
  };

  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
    svg {
      fill: ${theme.colors.white};
    }
  }
`;
