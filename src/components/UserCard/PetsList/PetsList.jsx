import React from 'react';
import { PetsListStyled, Title } from './PetsList.styled';
import PetsItem from '../PetsItem/PetsItem';

const PetsList = () => {
  return (
    <PetsListStyled>
      <Title>You didn't add pets yet.</Title>
      <PetsItem />
    </PetsListStyled>
  );
};

export default PetsList;
