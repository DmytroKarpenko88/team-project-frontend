import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { categories } from './categories';
import { List, Link, Item } from './NoticesCategoriesNav.stytled';

export const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const items = categories.map(({ category, path }, el) => {
    if (!isLoggedIn && category === 'favorite ads') {
      return null;
    }

    if (!isLoggedIn && category === 'my ads') {
      return null;
    }

    return (
      <Item key={el}>
        <Link to={`/notices/${path}`}>{category}</Link>
      </Item>
    );
  });
  return <List>{items}</List>;
};
