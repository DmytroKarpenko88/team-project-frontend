import React, { useState } from 'react';
import { Wrapper, Filter, Boxing } from './NoticesPage.styled';
import { Title } from 'components/Notices/Title/Title';
import { NoticeSearch } from 'components/Notices/NoticeSearch/NoticeSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddPetButton } from 'components/Notices/AddPetButton/AddPetButton';
import { NoticesFilter } from 'components/Notices/NoticesFilter/NoticesFilter';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
// import { ScrollToTopButton } from './ScrollToTopButton/ScrollToTopButton';
import { Container } from 'components/Notices/Container/Container.styled';

function Notices() {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Title>Find your favorite pet</Title>

      <NoticeSearch onSubmitNoticeForm={setSearch} />

      <Filter>
        <NoticesCategoriesNav />
        <Boxing>
          <NoticesFilter />
          <AddPetButton path="/add-pet" />
        </Boxing>
      </Filter>

      {/* <ScrollToTopButton /> */}
      <NoticesCategoriesList search={search} />
    </Container>
  );
}

export default Notices;
