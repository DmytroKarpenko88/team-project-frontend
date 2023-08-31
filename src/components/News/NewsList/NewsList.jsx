import React from 'react';
import { NewsListContainer } from './NewsList.styled';
import { NewsItem } from '../NewsItem/NewsItem';
// import { Text, TextBox } from './NewsList.styled';


export const NewsList = () => {

    return (
      <>
      <NewsListContainer>
        <NewsItem/>
        </NewsListContainer>
      </>
    
  );
};
