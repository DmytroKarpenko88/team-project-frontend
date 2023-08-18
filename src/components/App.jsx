import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import Register from './Register/Register';
import Main from './Main/Main';
import Notices from './Notices/Notices';
import AddPet from './AddPet/AddPet';
import Login from './Login/Login';
import PageNotFound from 'pages/PageNotFound';
// import Loader from './Loader/Loader';

const User = lazy(() => import('pages/User/User'));

export const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notices/:categoryName" element={<Notices />} />
          <Route path="/user" element={<User />} />
          <Route path="/add-pet" element={<AddPet />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
