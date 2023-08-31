import React from 'react';
import {
  Button,
  ContainerPg,
  H1Text,
  PicContainer,
  Image,
  Paragraph,
} from './PageNotFound.styled';
import { Paw } from 'components/icons';
const PageNotFound = () => {
  return (
    <>
      <ContainerPg>
        <H1Text> Oops! <Paragraph/> This page not found:( </H1Text>
        <PicContainer>
          <Image alt="not found" />
        </PicContainer>
        <Button to="/">
          <span>To main page</span>
          <span>
            <Paw />
          </span>
        </Button>
      </ContainerPg>
    </>
  );
};
export default PageNotFound;