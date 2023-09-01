import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Search, Cross } from 'components/icons';
import { Form, Input, Button, ClearBtn } from './NoticeSearch.styled';
// import { useDispatch } from 'react-redux';
// import {
//   useLocation,
//   useParams,
// } from 'react-router-dom';

export const NoticeSearch = ({ onSubmitNoticeForm }) => {
  const [search, setSearch] = useState('');
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const locationIsLoginUser = location.pathname.split('/')[2];
  // const { categoryName } = useParams();
  // console.log(categoryName);

  // useEffect(() => {
  //   if (!search) onSubmitNoticeForm(search);
  // }, [onSubmitNoticeForm, search]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = search.toLowerCase().trim();

    onSubmitNoticeForm(searchQuery);
    if (searchQuery === '') {
      Notify.warning('Please enter something');
      return;
    }
    // if (categoryName === 'own') {
    //   dispatch(getNoticesById(${category}, ${ searchQuery }));

    // } else if (categoryName === 'favorite') {
    //   dispatch(getNoticesAllFavorite(${category}, ${ searchQuery }));

    // } else
    // if (category) {
    //   dispatch(fetchNotices(category, searchQuery));
    // }
  };

  const handleChange = e => {
    const searchQuery = e.target.value;
    if (!searchQuery) {
      onSubmitNoticeForm(searchQuery);
    }
    setSearch(searchQuery);
  };

  const onClickClear = () => {
    setSearch('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        id="searchQuery"
        value={search}
        placeholder="Search"
        onChange={handleChange}
      />

      <Button type="submit" search={search}>
        <Search />
      </Button>
      {search && (
        <ClearBtn type="button" onClick={onClickClear}>
          <Cross />
        </ClearBtn>
      )}
    </Form>
  );
};

NoticeSearch.propTypes = {
  onSubmitNoticeForm: PropTypes.func.isRequired,
};
