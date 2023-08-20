import React from 'react';
import { Background, Page, Container, Title, Wrapper } from './Main.styled.jsx';

export const Main = () => {
  return (
    <>
      <Background>
        <Container>
          <Title>Take good care of your small pets</Title>
        </Container>
        <Wrapper>
          <Page />
        </Wrapper>
      </Background>
    </>
  );
};

export default Main;
