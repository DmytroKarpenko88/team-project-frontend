import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, } from 'redux/auth/auth-selectors';
import { selectNoticesIsLoading } from 'redux/notices/notices-selectors';
import { selectAllNotices } from 'redux/notices/notices-selectors';
// import Pagination from '@mui/material/Pagination';
import { Title } from 'components/Notices/Title/Title';
import { NoticeSearch } from 'components/Notices/NoticeSearch/NoticeSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddPetButton } from 'components/Notices/AddPetButton/AddPetButton';
import { NoticesFilter } from 'components/Notices/NoticesFilter/NoticesFilter';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { fetchNotices } from 'redux/notices/notices-operations';
import Loader from 'components/Loader/Loader';
import { Filter, Boxing } from './NoticesPage.styled';
import { Container } from 'components/Notices/Container/Container.styled';
import {
  getUserCurrentFavorite,
  getUserCurrentNotices,
} from 'redux/user/user-operations';
import { ScrollToTopButton } from 'components/Notices/ScrollToTopButton/ScrollToTopButton';
// import { addUserCurrentFavorite } from 'redux/user/user-operations';
// import { getNoticeById } from 'redux/notices/notices-operations';

function Notices() {
  const [search, setSearch] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectNoticesIsLoading);
  console.log("isLoading:", isLoading)
  const allNotices = useSelector(selectAllNotices)
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  console.log("categoryName:", categoryName)

  useEffect(() => {
    if (
      categoryName === 'sell' ||
      categoryName === 'lost-found' ||
      categoryName === 'in-good-hands'
    ) {
      dispatch(fetchNotices({ categoryName, search }));
      console.log('Dispatch notice')
      return;
    }
    if (categoryName === 'favorite' && isLoggedIn) {
      dispatch(getUserCurrentFavorite());
      console.log('Dispatch notice')
      return;
    }
    if (categoryName === 'own' && isLoggedIn) {
      dispatch(getUserCurrentNotices());
      return;
    }
    
  }, [categoryName, dispatch, isLoggedIn, search]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  scrollToTop();

  return (
    <>
      {!allNotices && <Loader />}
      <Container>
        <Title>Find your favorite pet</Title>

        <NoticeSearch onSubmitNoticeForm={setSearch} />

        <Filter>
          <NoticesCategoriesNav />

          <Boxing>
            <NoticesFilter />
            <AddPetButton />
          </Boxing>
        </Filter>

        {/* <ScrollToTopButton /> */}
        <NoticesCategoriesList search={search} />
        {/* <NoticesCardDetail /> */}

        {/* {totalPages > 8 && (
        <Pagination
          count={Math.ceil(totalPages / 8)}
          size="large"
          variant="outlined"
          color="primary"
          showFirstButton
          showLastButton
          // count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '100px',
          }}
        /> */}

        <ScrollToTopButton />
      </Container>
    </>
  );
}

export default Notices;
