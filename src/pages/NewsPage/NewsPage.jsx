import React, { useEffect, useState } from 'react';
import { Container, Title } from './NewsPage.styled';
import { NewsSearch } from 'components/News/NewsSearch/NewsSearch';
import { NewsList } from 'components/News/NewsList/NewsList';
import { useDispatch } from 'react-redux';
import { getAllNews } from 'redux/news/news-operations';
import Pagination from 'components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { selectTotalCount } from 'redux/news/news-selectors';

export default function NewsPage() {
  const dispatch = useDispatch();
  const totatalConunts = useSelector(selectTotalCount);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = newPage => setCurrentPage(newPage);

  useEffect(() => {
    dispatch(getAllNews({ page: currentPage, limit: 15 }));
  }, [dispatch, currentPage]);
  return (
    <>
      <Container>
        <Title>News</Title>
        {/* <NewsSearch onSubmitNoticeForm={setSearch} /> */}
        <NewsSearch />
        <NewsList />
        <Pagination
          currentPage={currentPage}
          totalPages={totatalConunts}
          onPageChange={onPageChange}
        />
      </Container>
    </>
  );
}
