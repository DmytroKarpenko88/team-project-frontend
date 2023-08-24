import React from 'react';
import { BgImg, Button, ContainerPg, H1Text } from './PageNotFound.styled';
// import { Link } from 'react-router-dom';

//import {NavLink as RouterLink} from 'react-router-dom';
const PageNotFound = () => {
  return (
    <>
      <ContainerPg>
        <H1Text>Oops! This page not found...</H1Text>
        <BgImg />
        <Button type="button">{/* <Link to="/">To main page</Link> */}</Button>
      </ContainerPg>
    </>
  );
};

export default PageNotFound;
