import { ContainerPg, H1Text,Button, BgImg } from './IconPage.styled';
import React from 'react';

//import {NavLink as RouterLink} from 'react-router-dom';
const PageNotFound = () => {
  return (
    <>
    <ContainerPg>
      <H1Text>Oops! This page not found...</H1Text>
      <BgImg/>
      <Button type="submit">
     {/*    <Link componrnt="/">To main page</Link> */}
      </Button>
      </ContainerPg> 
    </>
  );
};

export default PageNotFound;
