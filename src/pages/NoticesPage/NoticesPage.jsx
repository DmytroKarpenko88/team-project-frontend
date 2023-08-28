import React, {
  useEffect,
  useState,
  // useEffect
} from 'react';
import { useParams } from 'react-router-dom';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
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
import { getUserCurrentNotices } from 'redux/user/user-operations';

function Notices() {
  const [search, setSearch] = useState('');
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  // useEffect(() => {
  //   dispatch(fetchNotices());
  // }, [dispatch]);

  useEffect(() => {
    //   if (isLoggedIn) {
    //     return ;
    //   }
    if (
      categoryName === 'sell' ||
      categoryName === 'lost-found' ||
      categoryName === 'in-good-handls'
    ) {
      dispatch(fetchNotices(`${categoryName},${search})`));
      // dispatch(getUserCurrentNotices());
    }
    //   if (categoryName === 'favorite' && isLoggedIn) {
    //     // get(`/notices/user/favorite${params}`)
    // dispatch(getFavoriteNoticesbyCategory(`?page=${currentPage}`));
    //     return;
    // //   }
    //   if (categoryName === 'own' && isLoggedIn) {
    //     // get(`/notices/user/added${data}`)
    // dispatch(getAllOwnNotices(`?page=${currentPage}`));
    //     return;
    //   }
  }, [categoryName, dispatch]);

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

  // const handleOwnClick = () => {
  //   // get(`/notices/user/favorite${params}`)
  //   dispatchEvent(getNoticesByCategory({ query: '', page: ownCurrentPage }));
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
