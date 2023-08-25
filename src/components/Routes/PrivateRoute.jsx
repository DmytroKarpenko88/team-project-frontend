import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRegistered } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistred = useSelector(selectIsRegistered)
  const location = useLocation();
  return isLoggedIn || isRegistred ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
