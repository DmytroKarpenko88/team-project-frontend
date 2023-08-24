import React from 'react';
import AddPetForm from 'components/AddPetForm/AddPetForm';
import { AddPetDiv } from './AddPet.styled';

function AddPet() {
  return (
    <AddPetDiv>
      <AddPetForm />
    </AddPetDiv>
  );
}

export default AddPet;
