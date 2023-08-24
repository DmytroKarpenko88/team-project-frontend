import { useSelector } from 'react-redux';
import {
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isRegistered,
    isLoggedIn,
    isRefreshing,
    user,
  };
};
