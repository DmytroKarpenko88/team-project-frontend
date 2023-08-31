import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllNotices } from 'redux/notices/notices-selectors';
import { NoticesCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import { NoticeList, Text, TextBox } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router-dom';
import {
  selectUserCurrentFavoriteNotices,
  selectUserCurrentNotices,
} from 'redux/user/user-selectors';

export const NoticesCategoriesList = () => {
  const [noticesForList, setNoticesForList] = useState([]);
  const notices = useSelector(selectAllNotices);
  const ownNotices = useSelector(selectUserCurrentNotices);
  const userFavotites = useSelector(selectUserCurrentFavoriteNotices);
  // console.log('userFavotites:', userFavotites);

  // console.log('ownNotices:', ownNotices);
  // const favoriteNotices = useSelector(selectUserCurrentFavoriteNotices);
  // console.log('favoriteNotices:', favoriteNotices);
  const categoryName = useParams().categoryName;

  useEffect(() => {
    if (categoryName === 'own') {
      setNoticesForList(ownNotices);
    } else if (categoryName === 'favorite') {
      setNoticesForList(userFavotites);
    } else if (categoryName === 'sell' || 'lost-found' || 'in-good-hands') {
      setNoticesForList(notices);
    }
  }, [categoryName, notices, ownNotices, userFavotites]);

  return (
    <NoticeList>
      {noticesForList.length > 0 ? (
        noticesForList.map(item => (
          <NoticesCategoryItem key={item._id} notice={item} />
        ))
      ) : (
        <TextBox>
          <Text>Sorry, we can't find that</Text>
        </TextBox>
      )}
    </NoticeList>
  );
};
