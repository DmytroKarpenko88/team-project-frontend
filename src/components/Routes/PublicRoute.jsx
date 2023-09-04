import Loader from 'components/Loader/Loader';
import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isLoading, isLoggedIn } = useAuth();
  const { state } = useLocation();
  return (
    <>
      {isLoading && <Loader />}
      {!isLoggedIn ? children : <Navigate to={state ? state : '/user'} />};
    </>
  );
};

export default PublicRoute;
