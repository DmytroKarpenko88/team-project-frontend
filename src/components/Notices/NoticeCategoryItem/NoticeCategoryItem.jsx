import React, { useState } from 'react';
import cat from '../../../images/cat.jpg';
import {
  List,
  ImgContainer,
  Img,
  HeartIcon,
} from './NoticeCategoryItem.styled';
import { Heart } from 'components/icons';

export const NoticeCategoryItem = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <List>
      <ImgContainer>
        <Img onClic={toggleModal} src={cat} alt={cat} />
        <HeartIcon type="button">
          <Heart />
        </HeartIcon>
      </ImgContainer>
    </List>
  );
};
