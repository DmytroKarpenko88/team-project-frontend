import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Search, Cross } from 'components/icons';
import { Form, Input, Button, ClearBtn } from './NoticeSearch.styled';
// import { useDispatch } from 'react-redux';
// import { useLocation, useParams } from 'react-router-dom';

export const NoticeSearch = ({ onSubmitNoticeForm }) => {
  const [search, setSearch] = useState('');
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const locationIsLoginUser = location.pathname.split('/')[2];
  // const { categoryName } = useParams();

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.search.value
      .toLowerCase()
      .trim();
    onSubmitNoticeForm(searchQuery);
    // if (searchQuery === '') {
    //   alert('Please enter something');
    //   return;
    // }
    // if (locationIsLoginUser === 'own') {
    //   dispatch(getNoticesByOwn({ searchQuery }));
    // } else if (locationIsLoginUser === 'favorite') {
    //   dispatch(getNoticesAllFavorite({ searchQuery }));
    // } else if (category) {
    //   dispatch(
    //     getNoticeByCategory({
    //       category: categoryName,
    //       query: searchQuery,
    //     })
    //   );
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
