import styled from 'styled-components';
import { theme } from 'styles';

export const NewsListContainer = styled.ul`
display: flex;
max-width: 480px;
flex-direction: column;
    flex-wrap: wrap;
    gap: 44px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-top:24px;
    margin-bottom:40px;

    @media screen and (min-width:${theme.breakpoints.tablet}) {
      max-width: 768px;
      flex-basis: calc((100% - 60px) / 2);
      flex-wrap: wrap;
flex-direction: row;
padding-top:40px;
    margin-bottom:60px;
      
  }

  @media screen and (min-width:${theme.breakpoints.desktop}) {
      max-width: 1280px;
      flex-basis: calc((100% - 60px) / 3);
      padding-top:60px;
    margin-bottom:68px;
  }


`;

