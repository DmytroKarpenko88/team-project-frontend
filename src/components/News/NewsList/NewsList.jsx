import React from 'react';
import { NewsListContainer } from './NewsList.styled';
import { NewsItem } from '../NewsItem/NewsItem';
import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/news-selectors';


export const NewsList = ({search}) => {
  const news = useSelector(selectAllNews); 


  console.log(news);

  const filterContactHandler = () => {
    const normalizedFilter = search.toLocaleLowerCase();
    if (!search) {
      return news;
    }
    return news
      .filter(item =>
        item.title.toLocaleLowerCase().includes(normalizedFilter)
      )
    ;
  };
  const filterNews = filterContactHandler();



  return (
    <>
      <NewsListContainer>
        {news ? (
          filterNews.map((item, index) => <NewsItem key={index} news={item} />)
        ) : (
          <p>No friends</p>
        )}
      </NewsListContainer>
    </>
  );
};
