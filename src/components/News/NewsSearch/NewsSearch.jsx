import React, { useEffect, useState } from 'react';
import { Cross, Search} from 'components/icons';
import { Form, Input, Button, ClearBtn} from './NewsSearch.styled';
import { Notify } from 'notiflix';



export const NewsSearch = ({onSubmitNewsForm}) => {
  const [search, setSearch] = useState('');



  useEffect(() => {
    if (!search) onSubmitNewsForm(search);
  }, [onSubmitNewsForm, search]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = search.toLowerCase().trim();

    onSubmitNewsForm(searchQuery);
    if (searchQuery === '') {
      Notify.warning('Please enter something');
      return;
    }
  }

  const handleChange = e => {
    const searchQuery = e.target.value;
    if (!searchQuery) {
      onSubmitNewsForm(searchQuery);
    }
    setSearch(searchQuery);
  };

  const onClickClear = () => {
    setSearch('');
  };
  // const changeFilterHandler = e =>
  //   dispatch(changeFilter(e.currentTarget.value.toLowerCase().trim()));




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