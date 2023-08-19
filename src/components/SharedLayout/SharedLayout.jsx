import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from './SharedLayout.styled';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <LayoutContainer>
        <Header/>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutContainer>
    </>
  );
};

export default SharedLayout;
