import React from 'react';
import {
  Background,
  Page,
  Container,
  Title,
  Gif,
  Wrapper,
} from './Main.styled.jsx';

export const Main = () => {
  return (
    <>
      <Background>
        <Container>
          <Title>Take good care of your small pets</Title>
        </Container>
        <Wrapper>
          <Page />
          <Gif frameBorder="0" allowFullScreen />
        </Wrapper>
      </Background>
    </>
  );
};

export default Main;
