import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllNotices } from 'redux/notices/notices-selectors';
import { NoticesCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import { NoticeList, Text } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router-dom';
import { selectUserCurrentNotices } from 'redux/user/user-selectors';

export const NoticesCategoriesList = () => {
  const [noticesForList, setNoticesForList] = useState([]);
  const notices = useSelector(selectAllNotices);
  const ownNotices = useSelector(selectUserCurrentNotices);
  console.log('ownNotices:', ownNotices);
  const favoriteNotices = useSelector(selectUserCurrentNotices);
  console.log('favoriteNotices:', favoriteNotices);
  const categoryName = useParams().categoryName;

  useEffect(() => {
    if (categoryName === 'own') {
      setNoticesForList(ownNotices);
    } else if (categoryName === 'favorite') {
      setNoticesForList(favoriteNotices);
    } else if (categoryName === 'sell' || 'lost-found' || 'in-good-hands') {
      setNoticesForList(notices);
    }
  }, [categoryName, favoriteNotices, notices, ownNotices]);

  return (
    <>
      <NoticeList>
        {noticesForList.length > 0 ? (
          noticesForList.map(item => (
            <NoticesCategoryItem key={item._id} notice={item} />
          ))
        ) : (
          <Text>Sorry, we can't find that</Text>
        )}
      </NoticeList>
    </>
  );
};
