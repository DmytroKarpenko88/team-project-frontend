import React from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'hooks/useWindowSize';
import { PlusSmall, Plus } from 'components/icons';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useLocation } from 'react-router-dom';
import { Btn } from './AddPetButton.styled';
import { useSelector } from 'react-redux';

export const AddPetButton = ({ path, toggleModalUautorised }) => {
  const screenWidth = useWindowSize();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const onAddPetBtn = e => {
    e.preventDefault();
    if (isLoggedIn) {
      toggleModalUautorised();
      return false;
    }
  };

  return (
    <Btn to="/add-pet" onClick={onAddPetBtn} state={{ from: location }}>
      {screenWidth < 768 && <Plus />}
      Add Pet
      {screenWidth >= 768 && <PlusSmall />}
    </Btn>
  );
};

AddPetButton.propTypes = {
  path: PropTypes.string.isRequired,
  toggleModalUautorised: PropTypes.func,
};
