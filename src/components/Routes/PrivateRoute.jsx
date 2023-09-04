import Loader from 'components/Loader/Loader';
import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, isRegistred, isLoading } = useAuth();

  const location = useLocation();
  return (
    <>
      {isLoading && <Loader />}

      {isLoggedIn || isRegistred ? (
        children
      ) : (
        <Navigate to="/login" state={location} />
      )}
    </>
  );
};

export default PrivateRoute;
