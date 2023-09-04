import { useSelector } from 'react-redux';
import {
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectToken,
  selectIsLoading,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);

  return {
    isRegistered,
    isLoggedIn,
    isRefreshing,
    user,
    token,
    isLoading,
  };
};
