import React, {lazy} from 'react';


import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Main from './Main/Main';
import Notices from './Notices/Notices';
import AddPet from './AddPet/AddPet';

import User from './User/User';
// import Loader from './Loader/Loader';


const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    // <Loader />
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route path="/main" element={<Main />} />
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/notices/:categoryName" element={<Notices />}/>
      <Route path="/user" element={<User />}/>
      <Route path="/add-pet" element={<AddPet />}/>
      </Route>
    </Routes>
  );
};
