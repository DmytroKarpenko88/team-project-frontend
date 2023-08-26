import React from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'hooks/useWindowSize';
import { PlusSmall, Plus } from 'components/icons';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Btn } from './AddPetButton.styled';
import { useSelector } from 'react-redux';
import { ModalAttention } from 'components/Modals/ModalAttention/ModalAttention';

export const AddPetButton = ({ path, toggleModalUautorised }) => {
  const screenWidth = useWindowSize();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onAddPetBtn = e => {
    e.preventDefault();
    if (isLoggedIn) {
      toggleModalUautorised();
      return false;
    }
  };

  return (
    <>
      <Btn to="add-pet" onClick={onAddPetBtn}>
        {screenWidth < 768 && <Plus />}
        Add Pet
        {screenWidth >= 768 && <PlusSmall />}
      </Btn>
      <ModalAttention />
    </>
  );
};

AddPetButton.propTypes = {
  path: PropTypes.string.isRequired,
  toggleModalUautorised: PropTypes.func,
};
