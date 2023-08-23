import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import Main from './Main/Main';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import AddPet from './AddPet/AddPet';
import PageNotFound from 'pages/PageNotFound';
import ModalApproveAction from './ModalApproveAction';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
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
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="notices/:categoryName"
            element={
              <PublicRoute>
                <NoticesPage />
              </PublicRoute>
            }
          />
          <Route
            path="user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route
            path="add-pet"
            element={
              <PublicRoute>
                <AddPet />
              </PublicRoute>
            }
          />
          <Route
            path="icons"
            element={
              <PublicRoute>
                <IconPage />
              </PublicRoute>
            }
          />
          <Route path="modal-approve-action" element={<ModalApproveAction />} />
          <Route
            path="*"
            element={
              <PublicRoute>
                <PageNotFound />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
