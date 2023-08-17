import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { LayoutContainer } = require('./SharedLayout.styled');

const SharedLayout = () => {
  return (
    <>
      <LayoutContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutContainer>
    </>
  );
};

export default SharedLayout;
