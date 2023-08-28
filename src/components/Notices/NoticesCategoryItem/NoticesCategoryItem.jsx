import React, {
  // useEffect,
  useState,
} from 'react';
// import PropTypes from 'prop-types';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import cat from '../../../images/cat.jpg';
import {
  Item,
  ImgContainer,
  Img,
  HeartBtn,
  FilterStatus,
  ListPetInfo,
  LocationItem,
  DeleteNoticeBtn,
  AgeItem,
  SexItem,
  TextItem,
  LoadMoreBtn,
} from './NoticesCategoryItem.styled';
import { Heart, Location, Clock, Female, Paw, Trash } from 'components/icons';
import { ModalDelete, NoticeModal, ModalAttention } from 'components/Modals';
// import { useParams } from 'react-router-dom';
import {
  selectIsLoggedIn,
  // selectUser
} from 'redux/auth/auth-selectors';
// import { current } from '@reduxjs/toolkit';

export const NoticesCategoryItem = (
  // { notice }
  ) => {
  const [favorite, setFavorite] = useState(false);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [noticeModalShow, setNoticeModalShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { categoryName } = useParams();
  // const currentUser = useSelector(selectUser);
  // const favoriteNotices = useSelector(selectFavoriteNotices);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const newNotices = favoriteNotices => {
  //     favoriteNotices.forEach(favoriteNotics => {
  //       if (favoriteNotices._id === notice._id) {
  //         setFavorite(true);
  //       }
  //     });
  //   };
  //   if (isLoggedIn) {
  //     return newNotices;
  //   }
  // }, [isLoggedIn, notice._id]);

  // const handleAddInFavorite = async () => {
  //   try {
  //     if (currentUser.name === null && currentUser.email === null) {
  //       setShowAttentionModal(true);
  //     } else if (isLoggedIn && !favorite) {
  //       dispatch(addToFavorite(notice._id));
  //       setFavorite(true);
  //       alert('Added your favorite');
  //     } else if (isLoggedIn && favorite && categoryName !== favorite) {
  //       dispatch(deleteFromFavorite(notice._id));
  //       setFavorite(false);
  //       alert('Delete fron favorite');
  //     }
  //   } catch (error) {
  //     setShowAttentionModal(true);
  //   }
  // };

  // const handleDeleteOwnNotice = async () => {};

  const toggleNoticeModal = () => {
    setNoticeModalShow(!noticeModalShow);
  };
  const toggleModalDelete = () => {
    setModalDeleteShow(!modalDeleteShow);
  };

  const toggleAttentionModal = () => {
    setShowAttentionModal(!showAttentionModal);
  };

  return (
    <Item>
      <ImgContainer>
        <Img onClick={toggleNoticeModal} src={cat} alt="pet" />

        <FilterStatus>
          {/* {categoryFilter(notice._category.title)} */}
          Filter
        </FilterStatus>

        <HeartBtn
          type="button"
          className={favorite ? 'heart favorite' : 'heart'}
          onClick={
            () => setFavorite(!favorite)
            // handleAddInFavorite
          }
        >
          <Heart />
        </HeartBtn>

        {/* {currentUser.email === notice._owner.email && ( */}
        <DeleteNoticeBtn type="button" onClick={toggleModalDelete}>
          <Trash />
        </DeleteNoticeBtn>
        {/* )} */}

        <ListPetInfo>
          <LocationItem>
            <Location />
            Lviv
          </LocationItem>

          <AgeItem>
            <Clock />1 year
          </AgeItem>

          <SexItem>
            <Female />
            female
          </SexItem>
        </ListPetInfo>
      </ImgContainer>
      <TextItem>
        Title
        {/* {notice.title} */}
      </TextItem>

      <LoadMoreBtn type="button" onClick={toggleNoticeModal}>
        <span>Learn more</span>
        <span>
          <Paw />
        </span>
      </LoadMoreBtn>

      {isLoggedIn && (
        <NoticeModal show={noticeModalShow} onHide={toggleNoticeModal} />
      )}
      <ModalDelete show={modalDeleteShow} onHide={toggleModalDelete} />
      <ModalAttention show={showAttentionModal} onHide={toggleAttentionModal} />
    </Item>
  );
};

NoticesCategoryItem.propTypes = {
  // notice: PropTypes.arrayOf,
};
