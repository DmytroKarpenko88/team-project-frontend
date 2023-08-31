import styled from 'styled-components';
import { theme } from 'styles';



export const NewsItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.boxShadows.main};
  border-radius: 20px;
  width: 256px;
  
  transition: box-shadow 300ms ${theme.transition.main};
  &:hover {
    box-shadow: ${theme.boxShadows.secondary};
  }


  @media (min-width: ${ theme.breakpoints.tablet}) {
    // width: calc((100% - 32px) / 2);
  width: 336px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    // width: calc((100% - 32px * 2) / 3);
    width: 395px;
  }
`;

export const NewsBox = styled.div`
background: ${theme.colors.white};
max-width: 480px;
border-radius: 20px;

@media (min-width: ${ theme.breakpoints.tablet}) {
    
  max-width: 768px;
  }
`

export const BlueLine = styled.div`
max-width: 480px;
height: 8px;
margin-bottom:12px;
border-radius: 40px;
background: ${theme.colors.grBlue2}
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom:16px;
  object-fit: contain;
  height: 252px;
//   flex-grow: 2;

  border-radius: 20px;
  overflow: hidden;


  @media (min-width: ${ theme.breakpoints.tablet}) {
    width: 336px;
    height: 252px;
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 395px;
height: 252px;
  }
`;

export const Img = styled.img`
width: 280px;
height: 252px;
margin-left: auto;
margin-right: auto;

@media (min-width: ${ theme.breakpoints.tablet}) {
    width: 336px;
    height: 252px;
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 395px;
height: 252px;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 12px 12px;
  max-width: 480px;

  @media (min-width: ${ theme.breakpoints.tablet}) {
    max-width: 768px;
      }

`;

export const NewsTitle = styled.h2`
  margin-bottom: 16px;
  display: block;
  max-width: 371px;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xl};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const NewsBody = styled.p`
height:154px;
max-width: 480px;
margin-bottom: 40px;
color: ${theme.colors.black};
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const BottomInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

`;

export const NewsDate = styled.p`
  color: #888888;
  margin-bottom: 12px;
`;

export const NewsLink = styled.a`
  font-family: ${theme.fonts.main.medium};
  color: ${theme.colors.blue};
  text-decoration: none;

  &:hover,
  :focus {
    color: ${theme.colors.yellow};
  }
`;