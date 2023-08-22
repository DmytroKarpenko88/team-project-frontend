import styled from 'styled-components';
import { theme } from 'styles';

export const List = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;

  width: 280px;
  height: 456px;
  background-color: #fff;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.01);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 280px;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Img = styled.img`
  width: 280px;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const HeartIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c5dff6;

  border: none;
`;
