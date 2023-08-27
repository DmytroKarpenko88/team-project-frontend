import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
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
import { ModalDelete, NoticeModal } from 'components/Modals';
// import { useParams } from 'react-router-dom';
// import { selectUser } from 'redux/auth/auth-selectors';

export const NoticesCategoryItem = ({ notice }) => {
  const [favorite, setFavorite] = useState(false);
  // const [showIcon, setShowIcon] = useState(false);2
  // const [showAttentionModal, setShowAttentionModal] = useState(false);
  // const [showModalDelete, setShowModalDelete] = useState(false);
  // const [showDetailModal, setShowDetailModal] = useState(false);
  const [noticeModalShow, setNoticeModalShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  // const { categoryName } = useParams();
  // const currentUser = useSelector(selectUser);
  // const dispatch = useDispatch();

  // const handleAddInFavorite = async () => {
  //   try {
  //     if (user.name === null && user.email === null) {
  //       setShowAttentionModal(true);
  //     } else {
  //       const responce = await updateNotice(item.id, {
  //         favorite: !favorite,
  //       });
  //     }
  //   } catch (error) {}
  //   console.log('modalattention');
  // };
  const toggleNoticeModal = () => {
    setNoticeModalShow(!noticeModalShow);
  };
  const toggleModalDelete = () => {
    console.log('Delete');
    setModalDeleteShow(!modalDeleteShow);
  };

  return (
    <Item>
      <ImgContainer>
        <Img onClick={toggleNoticeModal} src={cat} alt="pet" />

        <FilterStatus>
          {/* {categoryFilter(notice.category)} */}
          Filter
        </FilterStatus>

        <HeartBtn
          type="button"
          className={favorite ? 'heart favorite' : 'heart'}
          onClick={() => setFavorite(!favorite)}
        >
          <Heart />
        </HeartBtn>

        <DeleteNoticeBtn type="button" onClick={toggleModalDelete}>
          <Trash />
        </DeleteNoticeBtn>

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
      <TextItem>Text</TextItem>

      <LoadMoreBtn type="button" onClick={toggleNoticeModal}>
        <span>Learn more</span>
        <span>
          <Paw />
        </span>
      </LoadMoreBtn>
      <ModalDelete show={modalDeleteShow} onHide={toggleModalDelete} />
      <NoticeModal show={noticeModalShow} onHide={toggleNoticeModal} />
    </Item>
  );
};
