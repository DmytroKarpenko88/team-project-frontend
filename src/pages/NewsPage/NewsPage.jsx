import React from 'react'
import { Container, Title } from './NewsPage.styled';
import { NewsSearch } from 'components/News/NewsSearch/NewsSearch';
import { NewsList } from 'components/News/NewsList/NewsList';

export default function NewsPage() {

    return (
        <>
            <Container>
                <Title>News</Title>
                {/* <NewsSearch onSubmitNoticeForm={setSearch} /> */}
                <NewsSearch />
                <NewsList/>
            </Container>
        </>
      
    );
  }


