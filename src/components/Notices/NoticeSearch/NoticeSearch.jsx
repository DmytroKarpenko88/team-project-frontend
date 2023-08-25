import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Search, Cross } from 'components/icons';
import { Form, Input, Button, ClearBtn } from './NoticeSearch.styled';

export const NoticeSearch = ({ onSubmitNoticeForm }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitNoticeForm(search);
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
    onSubmitNoticeForm('');
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
