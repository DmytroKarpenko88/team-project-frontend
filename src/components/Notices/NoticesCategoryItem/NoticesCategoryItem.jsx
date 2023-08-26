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
  AgeItem,
  SexItem,
  TextItem,
  BtnBox,
  LoadMoreBtn,
} from './NoticesCategoryItem.styled';
import { Heart, Location, Clock, Female, Paw } from 'components/icons';

export const NoticesCategoryItem = () => {
  const [favorite, setFavorite] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [showModalDelete, setShowModalDelete] = useState(false);
  // const [showAttentionModal, setShowAttentionModal] = useState(false);

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
  const toggleModal = () => {
    // setShowModal(!showModal);
    console.log('modalpet');
  };

  return (
    <Item>
      <ImgContainer>
        <Img onClick={toggleModal} src={cat} alt="pet" />

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

      <BtnBox>
        <LoadMoreBtn type="button">
          Learn more
          <Paw />
        </LoadMoreBtn>
      </BtnBox>
    </Item>
  );
};
