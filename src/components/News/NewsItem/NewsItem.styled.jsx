import styled from 'styled-components';
import { theme } from 'styles';



export const NewsItemContainer = styled.li`
position: relative;
width:280px;
height: 578px;
background-color: ${theme.colors.white};
box-shadow: ${theme.boxShadows.main};
border-radius: 20px;
margin-left: auto;
margin-right: auto;

transition: transform ${theme.transition.main};

&:hover,
&:focus {
  transform: scale(1.02);
  transition: transform ${theme.transition.main};
}

&:before {
  position: absolute;
  content: '';
  top: -20px;
  display: block;
  height: 8px;
  width: 100%;
  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  border-radius: 40px;
  opacity: 1;
}

@media screen and (min-width:${theme.breakpoints.tablet}) {
  height: 556px;
  width: 336px;

  &:before {
    top: -22px;
  }
}

@media screen and (min-width:${theme.breakpoints.desktop}){
  height: 534px;
  width: 395px;
}

cursor: pointer;




`;



export const ImageWrapper = styled.div`
height: 252px;
width: 100%;
margin-bottom: 16px;
position: relative;

`;

export const Img = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
border-radius: 20px;

`

export const TextContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 12px;
height: 310px;

@mediascreen and (min-width:${theme.breakpoints.tablet}) {
  padding-left: 12px;
  padding-right: 12px;
  height: 288px;
}

@media screen and  (min-width: ${theme.breakpoints.desktop}) {
  height: 266px;
}

`;

export const NewsTitle = styled.h4`
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
white-space: pre-wrap;
overflow: hidden;
text-overflow: ellipsis;
font-size: ${theme.fontSizes.xl};
font-style: normal;
line-height: 33px;
letter-spacing: -0.01em;
color: ${theme.colors.black};


  `;

export const NewsBody = styled.p`
height:154px;
width: 256px;
color: ${theme.colors.black};
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

@media screen and (min-width:${theme.breakpoints.tablet}) {
width: 312px;
  
}

@media screen and  (min-width:${theme.breakpoints.desktop}) {
width: 371px;
  
}
`;

export const BottomInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

`;

export const NewsDate = styled.p`
font-family: ${theme.fonts.main.regular};
font-style: normal;
font-size: ${theme.fontSizes.m};
line-height: 22px;
color: ${theme.colors.grey};
  
`;

export const NewsLink = styled.a`
text-decoration: none;
font-family: ${theme.fonts.main.medium};
font-style: normal;
font-size: ${theme.fontSizes.m};
line-height: 22px;
text-align: right;
color: ${theme.colors.blue};

&:hover,
&:focus {
  color: ${theme.colors.yellow};
}
`;