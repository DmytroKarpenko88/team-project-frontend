import React from 'react';
// import {
//   selecteNotices,
//   selectNoticesIsLoading,
// } from 'redux/notices/notices-selectors';
import { NoticesCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import {
  NoticeList,

  // Text
} from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  // const notices = useSelector(selecteNotices);
  return (
    <>
      {/* <NoticeList>
        {notices.length > 0 ? (
          notices.map(item => (
            <NoticesCategoryItem 
            key={item.id} notice={item} />
          ))
        ) : (
          <Text>Sorry, we can't find that</Text>
        )}
      </NoticeList> */}

      <NoticeList>
        <NoticesCategoryItem />
      </NoticeList>
    </>
  );
};
