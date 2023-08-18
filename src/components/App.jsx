import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
// import Loader from './Loader/Loader';

const User = lazy(() => import('pages/User/User'));

export const App = () => {
  return (
    // <Loader />
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
};
