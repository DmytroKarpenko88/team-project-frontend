import Modal from 'react-bootstrap/Modal';
import {
  BtnAddTo,
  BtnContact,
  BtnWrapper,
  CategoryName,
  Contact,
  Container,
  CrossBtn,
  Img,
  ImgBox,
  Info,
  InfoMessage,
  InfoName,
  InfoValues,
  ModalContainer,
  Title,
} from './NoticeModal.styled';
import { Cross, Heart } from 'components/icons';
import img from 'images/cat.jpg';

export const NoticeModal = props => {
  return (
    <ModalContainer {...props} size="lg" centered={true}>
      <Modal.Body>
        <CrossBtn onClick={props.onHide}>
          <Cross />
        </CrossBtn>
        <ImgBox>
          <CategoryName>In good hands</CategoryName>
          <Img src={img} alt="" />
        </ImgBox>
        <Title>Сute dog looking for a home</Title>

        <Container>
          <Info>
            <InfoName>Name:</InfoName>
            <InfoValues>Rich</InfoValues>
          </Info>
          <Info>
            <InfoName>Birthday: </InfoName>
            <InfoValues>21.09.2020</InfoValues>
          </Info>
          <Info>
            <InfoName>Type:</InfoName>
            <InfoValues>Pomeranian</InfoValues>
          </Info>
          <Info>
            <InfoName>Place:</InfoName>
            <InfoValues>Lviv</InfoValues>
          </Info>
          <Info>
            <InfoName>The sex:</InfoName>
            <InfoValues>male</InfoValues>
          </Info>
          <Info>
            <InfoName>Email:</InfoName>
            <Contact href="mailto:user@mail.com">user@mail.com</Contact>
          </Info>
          <Info>
            <InfoName>Phone:</InfoName>
            <Contact href="tel:+380971234567">+380971234567</Contact>
          </Info>
        </Container>

        <InfoMessage>
          Comments: Rich would be the perfect addition to an active family that
          loves to play and go on walks. I bet he would love having a doggy
          playmate too!
        </InfoMessage>

        <BtnWrapper>
          <BtnContact onClick={props.onHide}>
            <span>Contact</span>
          </BtnContact>

          <BtnAddTo onClick={props.onHide}>
            <span>Add to</span>
            <span>
              <Heart />
            </span>
          </BtnAddTo>
        </BtnWrapper>
      </Modal.Body>
    </ModalContainer>
  );
};
