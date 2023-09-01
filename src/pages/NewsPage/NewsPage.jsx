import React, { useEffect } from 'react';
import { Container, Title } from './NewsPage.styled';
import { NewsSearch } from 'components/News/NewsSearch/NewsSearch';
import { NewsList } from 'components/News/NewsList/NewsList';
import { useDispatch } from 'react-redux';
import { getAllNews } from 'redux/news/news-operations';
import Pagination from 'components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { selectTotalCount } from 'redux/news/news-selectors';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NewsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const totatalConunts = useSelector(selectTotalCount);
  const currentPage = new URLSearchParams(location.search).get('page') || 1;

  const onPageChange = newPage => {
    navigate(`?page=${newPage}`);
  };

  useEffect(() => {
    dispatch(getAllNews({ page: currentPage, limit: 15 }));
  }, [dispatch, currentPage]);
  return (
    <>
      <Container>
        <Title>News</Title>
        <NewsSearch />
        <NewsList />
        <Pagination
          currentPage={parseInt(currentPage)}
          totalPages={totatalConunts}
          onPageChange={onPageChange}
        />
      </Container>
    </>
  );
}
