import React from 'react';
import { NewsListContainer } from './NewsList.styled';
import { NewsItem } from '../NewsItem/NewsItem';
import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/news-selectors';
// import { Text, TextBox } from './NewsList.styled';


export const NewsList = () => {
  const news = useSelector(selectAllNews);
    return (
      <>
      <NewsListContainer>
          {/* <NewsItem/> */}
          {news ? (
          news.map(item => (
            <NewsItem key={news._id} news={item} />
          ))
        ) : (
          <p>No friends</p>
        )}
        </NewsListContainer>
      </>
    
  );
};
