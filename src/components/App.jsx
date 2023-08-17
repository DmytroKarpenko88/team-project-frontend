import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
// import Loader from './Loader/Loader';

export const App = () => {
  return (
    // <Loader />
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
    </Routes>
  );
};
