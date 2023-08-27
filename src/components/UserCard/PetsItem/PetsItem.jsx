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

const PetsItem = () => {
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  const closeModal = () => {
    setModalDeleteShow(prevState => !prevState);
  };
  return (
    <>
      <PetsCard>
        <PetImage />
        <InfoContainer>
          <DeleteBtn type="button" onClick={closeModal}>
            <Trash />
          </DeleteBtn>
          <div>
            <PetInfo>
              <b>Name:</b>
            </PetInfo>
            <PetInfo>
              <b>Date of birth:</b>
            </PetInfo>
            <PetInfo>
              <b>Type:</b>
            </PetInfo>
            <PetInfo>
              <b>Comments:</b>
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
