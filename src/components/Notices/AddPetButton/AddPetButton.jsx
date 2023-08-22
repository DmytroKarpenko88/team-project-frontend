import React from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { PlusSmall, Plus } from 'components/icons';
import { useNavigate } from 'react-router-dom';
import { Btn } from './AddPetButton.styled';

export const AddPetButton = ({ path }) => {
  const screenWidth = useWindowSize();
  const isLoggedIn = true;
  const navigate = useNavigate();

  const onAddPetBtn = e => {
    e.preventDefault();
    isLoggedIn ? navigate({ path }) : console.log('open modal');
  };

  return (
    <Btn onClick={onAddPetBtn}>
      {screenWidth < 768 && <Plus />}
      Add Pet
      {screenWidth >= 768 && <PlusSmall />}
    </Btn>
  );
};
