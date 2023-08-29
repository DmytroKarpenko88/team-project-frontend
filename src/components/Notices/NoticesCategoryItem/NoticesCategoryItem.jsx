import React, {
  // useEffect,
  useState,
} from 'react';
// import PropTypes from 'prop-types';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
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
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth-selectors';
import { getNoticeById } from 'redux/notices/notices-operations';
import { Notify } from 'notiflix';
// import { removeFavoriteNotice } from 'redux/notices/notices-operations';
// import { selectFiltredNotices } from 'redux/notices/notices-selectors';

export const NoticesCategoryItem = ({ notice }) => {
  const dispatch = useDispatch();
  const [
    favorite,
    //  setFavorite
  ] = useState(false);
  const [showAttentionModal, setShowAttentionModal] = useState(false);

  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  const [noticeModalShow, setNoticeModalShow] = useState(false);
  // const filterNotices = useSelector(selectFiltredNotices);
  // console.log(filterNotices);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { categoryName } = useParams();
  const currentUser = useSelector(selectUser);
  // console.log('currentUser:', currentUser);

  // console.log(notice);
  // console.log(notice.category);

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
  //       Notify.success('Added your favorite');
  //     } else if (isLoggedIn && favorite && categoryName !== favorite) {
  //       dispatch(deleteFromFavorite(notice._id));
  //       setFavorite(false);
  //       Notify.success('Deleted from favorite');
  //     }
  //   } catch (error) {
  //     setShowAttentionModal(true);
  //   }
  // };

  const handleAddInFavorite = async () => {
    try {
      if (!isLoggedIn) {
        setShowAttentionModal(true);
        return;
      }
    } catch (error) {
      Notify.warning(error.message);
    }
  };

  // const handleDeleteOwnNotice = async () => {
  //   if (isLoggedIn && currentUser._id === notice._owner._id) {
  //     dispatch(removeFavoriteNotice(notice._id));
  //     Notify.success('Deleted your own notice');
  //   }
  // };

  const toggleNoticeModal = () => {
    setNoticeModalShow(!noticeModalShow);
    dispatch(getNoticeById(notice._id));
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

        {notice.category.title ? (
          <FilterStatus>{notice.category.title}</FilterStatus>
        ) : (
          <FilterStatus></FilterStatus>
        )}

        <HeartBtn
          type="button"
          className={favorite ? 'heart favorite' : 'heart'}
          onClick={
            // () => setFavorite(!favorite)
            handleAddInFavorite
          }
        >
          <Heart />
        </HeartBtn>

        {currentUser.email === notice._owner.email && (
          <DeleteNoticeBtn type="button" onClick={toggleModalDelete}>
            <Trash />
          </DeleteNoticeBtn>
        )}

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
      <TextItem>{notice.title}</TextItem>
      <LoadMoreBtn type="button" onClick={toggleNoticeModal}>
        <span>Learn more</span>
        <span>
          <Paw />
        </span>
      </LoadMoreBtn>

      {/* modals */}
      {noticeModalShow && (
        <NoticeModal show={noticeModalShow} onHide={toggleNoticeModal} />
      )}

      {modalDeleteShow && (
        <ModalDelete show={modalDeleteShow} onHide={toggleModalDelete} />
      )}

      {showAttentionModal && (
        <ModalAttention
          show={showAttentionModal}
          onHide={toggleAttentionModal}
        />
      )}
    </Item>
  );
};

NoticesCategoryItem.propTypes = {
  // notice: PropTypes.arrayOf,
};
