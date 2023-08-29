import Modal from 'react-bootstrap/Modal';
import {
  BtnAddTo,
  BtnContact,
  BtnWrapper,
  CategoryName,
  Contact,
  Container,
  CrossBtn,
  FlexWrapper,
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
import { theme } from 'styles';
import { useSelector } from 'react-redux';
import { selectNoticeById, selectNoticesIsLoading } from 'redux/notices/notices-selectors';
import Loader from 'components/Loader/Loader';
// import { useEffect } from 'react';

export const NoticeModal = props => {
  const noticeById = useSelector(selectNoticeById);
  const isLoading = useSelector(selectNoticesIsLoading);
  console.log("isLoading :", isLoading )
  
  console.log("noticeById:", noticeById)
  
  const {
    birthday,
    describe,
    location,
    name,
    sex,
    title,
    type,

    _owner: { email, phone },
  } = noticeById;

  return (
    <>
      {!isLoading ? (
        <ModalContainer {...props} size="lg" centered={true}>
          <Modal.Body>
            <CrossBtn onClick={props.onHide}>
              <Cross />
            </CrossBtn>
            <FlexWrapper>
              <ImgBox>
                <CategoryName>In good hands</CategoryName>
                <Img src={img} alt="" />
              </ImgBox>
              <div>
                <Title>{title}</Title>

                <Container>
                  <Info>
                    <InfoName>Name:</InfoName>
                    <InfoValues>{name}</InfoValues>
                  </Info>
                  <Info>
                    <InfoName>Birthday: </InfoName>
                    <InfoValues>{birthday}</InfoValues>
                  </Info>
                  <Info>
                    <InfoName>Type:</InfoName>
                    <InfoValues>{type}</InfoValues>
                  </Info>
                  <Info>
                    <InfoName>Place:</InfoName>
                    <InfoValues>{location}</InfoValues>
                  </Info>
                  <Info>
                    <InfoName>The sex:</InfoName>
                    <InfoValues>{sex}</InfoValues>
                  </Info>
                  <Info>
                    <InfoName>Email:</InfoName>
                    <Contact href="mailto:user@mail.com">
                      {/* {email} */}
                    </Contact>
                  </Info>
                  <Info>
                    <InfoName>Phone:</InfoName>
                    <Contact href="tel:+380971234567">{/* {phone} */}</Contact>
                  </Info>
                </Container>
              </div>
            </FlexWrapper>

            <InfoMessage>
              <span style={{ fontFamily: `${theme.fonts.main.semiBold}` }}>
                Comments:
              </span>
              {describe}
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
      )
      : <Loader/>}
    </>
  );
};
