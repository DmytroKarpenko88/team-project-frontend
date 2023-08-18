import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Register from './Register/Register';
import Main from './Main/Main';
import Notices from './Notices/Notices';
import AddPet from './AddPet/AddPet';
import Login from './Login/Login';
import User from './User/User';
// import Loader from './Loader/Loader';

export const App = () => {
  return (
    // <Loader />
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/notices/:categoryName" element={<Notices />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/add-pet" element={<AddPet />}></Route>
    </Routes>
  );
};
