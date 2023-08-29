import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllNotices } from 'redux/notices/notices-selectors';
import { NoticesCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import { NoticeList, Text } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  const notices = useSelector(selectAllNotices);
  console.log(notices);
  return (
    <>
      <NoticeList>
        {notices.length > 0 ? (
          notices.map(item => (
            <NoticesCategoryItem key={item._id} notice={item} />
          ))
        ) : (
          <Text>Sorry, we can't find that</Text>
        )}
      </NoticeList>
    </>
  );
};
