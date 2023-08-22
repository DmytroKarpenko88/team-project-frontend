import React, { useState } from 'react';
import cat from '../../../images/cat.jpg';
import {
  List,
  ImgContainer,
  Img,
  HeartItem,
  FilterStatus,
  LocationItem,
  AgeItem,
  SexItem,
  TitleItem,
  LoadMoreBtn,
} from './NoticesCategoriesItem.styled';
import { Heart, Location, Clock, Female, Paw } from 'components/icons';

export const NoticesCategoriesItem = () => {
  const [favorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    // setShowModal(!showModal);
    console.log('modal');
  };

  return (
    <List>
      <ImgContainer>
        <Img onClick={toggleModal} src={cat} alt={cat} />

        <FilterStatus>
          {/* {categoryFilter(notice.category)} */}
          Filter
        </FilterStatus>

        <HeartItem type="button">{favorite ? <Heart /> : <Heart />}</HeartItem>

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
      </ImgContainer>
      <TitleItem>Title</TitleItem>
      <LoadMoreBtn type="button">
        Learn more
        <Paw />
      </LoadMoreBtn>
    </List>
  );
};
