import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import Main from './Main/Main';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import AddPet from './AddPet/AddPet';
import PageNotFound from 'pages/PageNotFound';
import ModalApproveAction from './ModalApproveAction';
// import Loader from './Loader/Loader';

const Register = lazy(() => import('pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const User = lazy(() => import('pages/User/User'));
const IconPage = lazy(() => import('pages/IconPage'));

export const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="notices/:categoryName" element={<NoticesPage />} />
          <Route path="user" element={<User />} />
          <Route path="add-pet" element={<AddPet />} />
          <Route path="icons" element={<IconPage />} />
          <Route path="modal-approve-action" element={<ModalApproveAction />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
