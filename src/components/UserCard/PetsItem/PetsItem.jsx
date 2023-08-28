import { useState } from 'react';
import { Trash } from 'components/icons';
import {
  DeleteBtn,
  InfoContainer,
  PetImage,
  PetInfo,
  PetsCard,
} from './PetsItem.styled';
import { ModalDelete } from 'components/Modals';

const PetsItem = ({ pet }) => {
  console.log('pet:', pet);
  const { name, birthday, type, petURL, describe } = pet;
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  const closeModal = () => {
    setModalDeleteShow(prevState => !prevState);
  };
  return (
    <>
      <PetsCard>
        <PetImage src={petURL} alt={name} />
        <InfoContainer>
          <DeleteBtn type="button" onClick={closeModal}>
            <Trash />
          </DeleteBtn>
          <div>
            <PetInfo>
              <b>Name: {name}</b>
            </PetInfo>
            <PetInfo>
              <b>Date of birth: {birthday}</b>
            </PetInfo>
            <PetInfo>
              <b>Type: {type}</b>
            </PetInfo>
            <PetInfo>
              <b>Comments: {describe}</b>
            </PetInfo>
          </div>
        </InfoContainer>
      </PetsCard>
      {modalDeleteShow && (
        <ModalDelete
          show={modalDeleteShow}
          onHide={() => setModalDeleteShow(false)}
        />
      )}
    </>
  );
};

export default PetsItem;
