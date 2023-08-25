import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from './SharedLayout.styled';
import {Header} from 'components/Header/Header';
import { BackgroundWrapper } from 'components/BackgroundWrappImg/BackgroundWrappImg';

const SharedLayout = () => {
  return (
    <>
     
      <LayoutContainer>
        <BackgroundWrapper/>
        <Header/>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutContainer>
    </>
  );
};

export default SharedLayout;
