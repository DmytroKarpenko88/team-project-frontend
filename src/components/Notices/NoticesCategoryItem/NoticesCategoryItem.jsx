import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import fotoAlternate from 'images/not-found.png';
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
import {
  Heart,
  Location,
  Clock,
  Female,
  Male,
  Paw,
  Trash,
} from 'components/icons';
import { converterAge } from 'utils/converterAge';
import { ModalDelete, NoticeModal, ModalAttention } from 'components/Modals';
import { useParams } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth-selectors';
import {
  addUserCurrentFavorite,
  deleteUserCurrentNotices,
  getNoticeById,
} from 'redux/notices/notices-operations';
import { selectUserCurrentFavoriteNoticesID } from 'redux/notices/notices-selectors';

export const NoticesCategoryItem = ({ notice }) => {
  // console.log('notice:', notice);
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const [showAttentionModal, setShowAttentionModal] = useState(false);

  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  const [noticeModalShow, setNoticeModalShow] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { categoryName } = useParams();
  const currentUser = useSelector(selectUser);
  const userFavoriteNoticesID = useSelector(selectUserCurrentFavoriteNoticesID);

  useEffect(() => {
    if (userFavoriteNoticesID.includes(notice._id)) {
      setFavorite(true);
    }
  }, [notice._id, userFavoriteNoticesID]);

  // useEffect(() => {
  //   const newNotices = favoriteNotices => {
  //     favoriteNotices.find(favoriteNotics => {
  //       if (favoriteNotices._id === notice._id) {
  //         setFavorite(true);
  //       }
  //     });
  //   };
  //   if (isLoggedIn) {
  //     return newNotices;
  //   }
  // }, [isLoggedIn, notice._id]);

  const handleAddInFavorite = async () => {
    if (currentUser.name === null && currentUser.email === null) {
      setShowAttentionModal(true);
    } else if (isLoggedIn && !favorite) {
      dispatch(addUserCurrentFavorite(notice._id));
      setFavorite(true);
      Notify.success('Added your favorites');
    } else if (isLoggedIn && favorite && categoryName !== favorite) {
      dispatch(addUserCurrentFavorite(notice._id));
      setFavorite(false);
      Notify.success('Deleted from favorites');
    } else if (categoryName === 'favorite') {
      // dispatch(removeFromFavoriteCategory(notice._id));
      setFavorite(false);
    }
  };

  // const handleAddInFavorite = async  => {
  //   try {
  //     if (!isLoggedIn) {
  //       setShowAttentionModal(true);
  //       return;
  //     }
  //   } catch (error) {
  //     Notify.warning(error.message);
  //   }
  // };

  const handleDeleteOwnNotice = async () => {
    if (isLoggedIn && currentUser.email === notice._owner.email) {
      dispatch(deleteUserCurrentNotices(notice._id));
      Notify.success('Deleted your own notice');
    }
    setModalDeleteShow(!modalDeleteShow);
  };

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

  const locationSlice = location => {
    return location.length > 5 ? location.slice(0, 4) + '...' : location;
  };
  const titleFormat = title => {
    return title.length > 45 ? title.slice(0, 45) + '...' : title;
  };

  return (
    <>
      {notice && (
        <Item>
          <ImgContainer>
            <Img
              onClick={toggleNoticeModal}
              src={notice.petURL ? notice.petURL : fotoAlternate}
              alt=""
            />

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
                {locationSlice(notice.location)}
              </LocationItem>

              <AgeItem>
                <Clock />
                {notice.birthday ? converterAge(notice.birthday) : '1 year'}
              </AgeItem>

              <SexItem>
                {notice.sex === 'male' ? <Male /> : <Female />}
                {notice.sex}
              </SexItem>
            </ListPetInfo>
          </ImgContainer>

          <TextItem>{titleFormat(notice.title)}</TextItem>
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
            <ModalDelete
              show={modalDeleteShow}
              onHide={toggleModalDelete}
              onExit={handleDeleteOwnNotice}
            />
          )}

          {showAttentionModal && (
            <ModalAttention
              show={showAttentionModal}
              onHide={toggleAttentionModal}
            />
          )}
        </Item>
      )}
    </>
  );
};

NoticesCategoryItem.propTypes = {
  // notice: PropTypes.arrayOf,
};
