import React from 'react';
import { NoticesCategoriesItem } from '../NoticesCategoriesItem/NoticesCategoriesItem';
import { NoticeList } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  return (
    <NoticeList>
      <NoticesCategoriesItem />
    </NoticeList>
  );
};
