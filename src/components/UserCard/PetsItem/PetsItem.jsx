import { Trash } from 'components/icons';
import {
  DeleteBtn,
  InfoContainer,
  PetImage,
  PetInfo,
  PetsCard,
} from './PetsItem.styled';

const PetsItem = () => {
  return (
    <>
      <PetsCard>
        <PetImage />
        <InfoContainer>
          <DeleteBtn>
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
    </>
  );
};

export default PetsItem;
