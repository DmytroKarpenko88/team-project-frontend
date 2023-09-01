import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PetsListStyled, Title } from './PetsList.styled';
import PetsItem from '../PetsItem/PetsItem';
import { selectPets } from 'redux/pets/pets-selectors';

const PetsList = () => {
  const data = useSelector(selectPets);
  const [isDataUpdated, setDataUpdated] = useState(false);
  const [dataToUpdate, setData] = useState(data.pets);

  useEffect(() => {
    // setDataUpdated(true);
    setData(data.pets);
  }, [data]);

  useEffect(() => {
    if (isDataUpdated) {
      setDataUpdated(false);
    }
  }, [isDataUpdated]);

  return (
    <>
      {dataToUpdate && (
        <PetsListStyled>
          {dataToUpdate.length === 0 && <Title>You didn't add pets yet.</Title>}
          {dataToUpdate.length !== 0 &&
            dataToUpdate.map((item, index) => (
              <PetsItem key={index} pet={item} />
            ))}
        </PetsListStyled>
      )}
    </>
  );
};

export default PetsList;
