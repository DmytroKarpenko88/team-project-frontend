import React from 'react';

import {
  Title,
  Container,
  ImagesContainer,
  ImgBuldog,
  ImgDog,
  ImgCat,
} from './Main.styled';

export default function MainPage() {
  return (
    <>
      <Container>
        <Title>Take good care of your small pets </Title>
        <ImagesContainer>
          <ImgBuldog alt="Buldog" />
          <ImgDog alt="Dog" />
          <ImgCat alt="Cat" />
        </ImagesContainer>
      </Container>
    </>
  );
}
