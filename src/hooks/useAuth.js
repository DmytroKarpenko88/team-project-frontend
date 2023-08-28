import { useSelector } from 'react-redux';
import {
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserCurrentNotices,
  selectUser,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const userCurrentNotices = useSelector(selectUserCurrentNotices);
  // console.log("userCurrentNotices:", userCurrentNotices)

  return {
    isRegistered,
    isLoggedIn,
    isRefreshing,
    user,
    userCurrentNotices,
  };
};
