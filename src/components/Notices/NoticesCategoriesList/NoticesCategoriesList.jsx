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
  const own = useSelector(selectUserCurrentNotices);
  const categoryName = useParams().categoryName;

  useEffect(() => {
    // if (categoryName === 'sell' || 'lost-found' || 'in-good-hands') {
    //   setNoticesForList(notices);
    // } else if (categoryName === 'own') {
    // setNoticesForList(own);

    // }

    switch (categoryName) {
      case 'sell' || 'lost-found' || 'in-good-hands':
        setNoticesForList(notices);
        break;
      case 'own':
        setNoticesForList(own);
        break;
      default:
        break;
    }
  }, [categoryName, notices, own]);

  // console.log(notices);
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
