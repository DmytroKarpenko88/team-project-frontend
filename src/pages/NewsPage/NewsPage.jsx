import React, { useEffect } from 'react'
import { Container, Title } from './NewsPage.styled';
import { NewsSearch } from 'components/News/NewsSearch/NewsSearch';
import { NewsList } from 'components/News/NewsList/NewsList';
import { useDispatch } from 'react-redux';
import { getAllNews } from 'redux/news/news-operations';

export default function NewsPage() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
    return (
        <>
            <Container>
                <Title>News</Title>
                {/* <NewsSearch onSubmitNoticeForm={setSearch} /> */}
                <NewsSearch />
                <NewsList/>
            </Container>
        </>
      
    );
  }


