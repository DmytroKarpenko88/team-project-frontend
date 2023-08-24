import React from 'react';
import { Text, UserButton, UserIcon, UserLink } from './UserNav.styled';
import { selectUser, selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const UserNav = () => {
   // const [name, setName] = useState('');
   const user = useSelector(selectUser);
   console.log("user:", user)
   const isLoggedIn = useSelector(selectIsLoggedIn)
   console.log("isLoggedIn:", isLoggedIn)
   // const isRefreshing = useSelector(selectIsRefreshing)
   // useEffect(() => {
   //    setName(user.name)
   //    console.log(user);

   //  }, [isLoggedIn]);

  return (
    <UserLink to="/user">
      <UserButton>
        <UserIcon />
      </UserButton>
      <Text>{'user.name'}</Text>
    </UserLink>
  );
};
