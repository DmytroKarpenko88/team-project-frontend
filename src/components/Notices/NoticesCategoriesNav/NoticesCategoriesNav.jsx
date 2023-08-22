import React from 'react';
import { List, Link, Item } from './NoticesCategoriesNav.stytled';

export const NoticesCategoriesNav = () => {
  const isLoggedIn = true;
  return (
    <List>
      <Item>
        <Link to="/notices/sell">sell</Link>
      </Item>

      <Item>
        <Link to="/notices/lost-found">lost/found</Link>
      </Item>

      <Item>
        <Link to="/notices/for-free">in good hands</Link>
      </Item>

      {isLoggedIn && (
        <>
          <Item>
            <Link to="/notices/favorite">favorite ads</Link>
          </Item>

          <Item>
            <Link to="/notices/own">my ads</Link>
          </Item>
        </>
      )}
    </List>
  );
};
