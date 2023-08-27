import React from 'react';
import { useSelector } from 'react-redux';
import { PetsListStyled, Title } from './PetsList.styled';
import PetsItem from '../PetsItem/PetsItem';
import { selectPets } from 'redux/pets/pets-selectors';

const PetsList = () => {
  const pets = useSelector(selectPets);
  return (
    <PetsListStyled>
      {pets.length === 0 && <Title>You didn't add pets yet.</Title>}
      {pets.length !== 0 &&
        pets.map(item => <PetsItem key={item._id} pet={item} />)}
    </PetsListStyled>
  );
};

export default PetsList;
