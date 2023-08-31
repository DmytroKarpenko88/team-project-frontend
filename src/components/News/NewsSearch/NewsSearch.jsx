import React from 'react';
import { Search} from 'components/icons';
import { Form, Input, Button} from './NewsSearch.styled';


export const NewsSearch = () => {

  return (
    <Form >
      <Input
        name="search"
        type="text"
        id="searchQuery"
        // value={search}
        placeholder="Search"
        // onChange={handleChange}
      />

      <Button type="submit">
        <Search />
      </Button>
      {/* {search && (
        <ClearBtn type="button" onClick={onClickClear}>
          <Cross />
        </ClearBtn>
      )} */}
    </Form>
  );
};