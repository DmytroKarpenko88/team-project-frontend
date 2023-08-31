import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
// import Pagination from '@mui/material/Pagination';
import { Title } from 'components/Notices/Title/Title';
import { NoticeSearch } from 'components/Notices/NoticeSearch/NoticeSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddPetButton } from 'components/Notices/AddPetButton/AddPetButton';
import { NoticesFilter } from 'components/Notices/NoticesFilter/NoticesFilter';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { fetchNotices } from 'redux/notices/notices-operations';
// import { selectIsLoading } from 'redux/notices/notices-selectors';
// import Loader from 'components/Loader/Loader';
// import { ScrollToTopButton } from './ScrollToTopButton/ScrollToTopButton';
import { Filter, Boxing } from './NoticesPage.styled';
import { Container } from 'components/Notices/Container/Container.styled';
import {
  getUserCurrentFavorite,
  getUserCurrentNotices,
} from 'redux/user/user-operations';
// import { addUserCurrentFavorite } from 'redux/user/user-operations';
// import { getNoticeById } from 'redux/notices/notices-operations';

function Notices() {
  const [search, setSearch] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    if (
      categoryName === 'sell' ||
      categoryName === 'lost-found' ||
      categoryName === 'in-good-hands'
    ) {
      dispatch(fetchNotices({ categoryName, search }));
    }
    if (categoryName === 'favorite' && isLoggedIn) {
      // get(`/notices/user/favorite${params}`)
      dispatch(getUserCurrentFavorite());
      return;
    }
    if (categoryName === 'own' && isLoggedIn) {
      // get(`/notices/user/added${data}`)
      dispatch(getUserCurrentNotices());
      return;
    }
  }, [categoryName, dispatch, isLoggedIn, search]);

  // const handleCategoriesChange = option => {
  //   // при зміні фільтраціїБ змінює сторінку пагінації на 1
  //   setCurrentPage(1);
  //   scroll.scrollToTop();
  //   console.log('object');
  // };

  // const handlePageChange = (event, page) => {
  //   setCurrentPage(page);
  //   // scroll.scrollToTop();
  //   // код для отримання нових даних, використання фільтрів тощо
  // };

  return (
    <>
      {/* {isLoading && <Loader />} */}
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
        />

        

        {/* <ScrollToTopButton /> */}
      </Container>
    </>
  );
}

export default Notices;
