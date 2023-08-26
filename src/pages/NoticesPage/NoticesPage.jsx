import React, {
  useState,
  // useEffect
} from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
// import Pagination from '@mui/material/Pagination';
import { Title } from 'components/Notices/Title/Title';
import { NoticeSearch } from 'components/Notices/NoticeSearch/NoticeSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddPetButton } from 'components/Notices/AddPetButton/AddPetButton';
import { NoticesFilter } from 'components/Notices/NoticesFilter/NoticesFilter';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
// import { fetchNotices } from 'redux/notices/notices-operations';
// import { ModalUnautorised } from 'components/ModalUnautorised/ModalUnautorised';
// import { ScrollToTopButton } from './ScrollToTopButton/ScrollToTopButton';
import {
  // Wrapper,
  Filter,
  Boxing,
} from './NoticesPage.styled';
import { Container } from 'components/Notices/Container/Container.styled';

function Notices() {
  const [search, setSearch] = useState('');
  const [isShowModalUnautorised, setIsShowModalUnautorised] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);

  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const totalPages = useSelector(selectTotalNotice);

  // const dispatch = useDispatch();
  // const { categoryName } = useParams();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     // 'get('/notices/user/favorite')'
  //     // dispatch(fetchAllFavNotices());
  //     dispatch(fetchNotices);
  //   }
  //   if (
  //     categoryName === 'sell' ||
  //     categoryName === 'lost-found' ||
  //     categoryName === 'in-good-handls'
  //   ) {
  //     dispatch();
  //     // get(`notices/users/search${category}`)
  //     // getNoticesByCategory(`?category=${categoryName}&page=${currentPage}`)
  //     return;
  //   }
  //   if (categoryName === 'favorite' && isLoggedIn) {
  //     // get(`/notices/user/favorite${params}`)
  //     // dispatch(getFavNoticesbyCategory(`?page=${currentPage}`));
  //     return;
  //   }
  //   if (categoryName === 'own' && isLoggedIn) {
  //     // get(`/notices/user/added${data}`)
  //     // dispatch(getAllOwnNotices(`?page=${currentPage}`));
  //     return;
  //   }
  // }, [categoryName, dispatch, isLoggedIn, currentPage]);

  const toggleModalUautorised = () => {
    setIsShowModalUnautorised(!isShowModalUnautorised);
  };
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
    <Container>
      <Title>Find your favorite pet</Title>

      <NoticeSearch onSubmitNoticeForm={setSearch} />

      <Filter>
        <NoticesCategoriesNav />

        <Boxing>
          <NoticesFilter />
          <AddPetButton
            path="/add-pet"
            toggleModalUautorised={toggleModalUautorised}
          />
          {/* {isLoggedIn ? (
            <AddPetButton path="/add-pet" />
          ) : (
            <AddPetButton onClick={setIsShowModalUnautorised(true)} />
          )}
          ;
          {isShowModalUnautorised && (
            <ModalUnautorised onClose={toggleModalUautorised} />
          )} */}
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
      )} */}
    </Container>
  );
}

export default Notices;
