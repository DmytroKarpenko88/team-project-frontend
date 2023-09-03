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
import { theme } from 'styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNoticeById,
  selectNoticesIsLoading,
  selectUserCurrentFavoriteNoticesID,
} from 'redux/notices/notices-selectors';
import Loader from 'components/Loader/Loader';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth-selectors';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { addUserCurrentFavorite } from 'redux/notices/notices-operations';
import { ModalAttention } from '..';

// import { useEffect } from 'react';

export const NoticeModal = props => {
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const noticeById = useSelector(selectNoticeById);
  const isLoading = useSelector(selectNoticesIsLoading);
  const currentUser = useSelector(selectUser);
  const userFavoriteNoticesID = useSelector(selectUserCurrentFavoriteNoticesID);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const toggleAttentionModal = () => {
    setShowAttentionModal(!showAttentionModal);
  };

  const {
    _id,
    birthday,
    describe,
    location,
    name,
    sex,
    title,
    type,
    petURL,
    price,
  } = noticeById;

  const category = noticeById['category'];
  const owner = noticeById['_owner'];

  // const callFromModal = () => {
  //   const phoneNumberFormatted = owner.phone.replace(/\D/g, '');
  //   const telLink = `tel:${phoneNumberFormatted}`;

  //   console.log('telLink:', telLink);
  //   return telLink;
  // };

  useEffect(() => {
    if (userFavoriteNoticesID.includes(_id)) {
      setFavorite(true);
    }
  }, [_id, userFavoriteNoticesID]);

  const handleAddInFavorite = () => {
    if (currentUser.name === null && currentUser.email === null) {
      setShowAttentionModal(true);
      // props.onHide();
    } else if (isLoggedIn && !favorite) {
      dispatch(addUserCurrentFavorite(_id));
      setFavorite(true);
      Notify.success('Added your favorite');
    } else if (isLoggedIn && favorite) {
      dispatch(addUserCurrentFavorite(_id));
      setFavorite(false);
      Notify.success('Deleted from favorite');
    }
  };

  const titleFormat = title => {
    return title.length > 45 ? title.slice(0, 45) + '...' : title;
  };

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
                <CategoryName>{category.title}</CategoryName>
                <Img src={petURL} alt="pet" />
              </ImgBox>
              <div>
                <Title>{titleFormat(title)}</Title>

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
                    <InfoName>Sex:</InfoName>
                    <InfoValues>{sex}</InfoValues>
                  </Info>
                  {category.code === 'sell' && (
                    <Info>
                      <InfoName>Price:</InfoName>
                      <InfoValues>
                        {isLoggedIn ? `${price} ₴` : 'xxxxxxx'}
                      </InfoValues>
                    </Info>
                  )}
                  <Info>
                    <InfoName>Email:</InfoName>
                    <Contact href="mailto:user@mail.com">{owner.email}</Contact>
                  </Info>
                  <Info>
                    <InfoName>Phone:</InfoName>
                    <Contact href="tel:+380971234567">{owner.phone}</Contact>
                  </Info>
                </Container>
              </div>
            </FlexWrapper>

            <InfoMessage>
              <span style={{ fontFamily: `${theme.fonts.main.semiBold}` }}>
                Comments:{describe}
              </span>
            </InfoMessage>

            <BtnWrapper>
              <BtnContact
                // href={callFromModal()}
                href={
                  owner.phone ? `tel:${owner.phone}` : `mailto:${owner.email}`
                }
              >
                <span>Contact</span>
              </BtnContact>

              <BtnAddTo
                onClick={handleAddInFavorite}
                className={favorite ? 'heart favorite' : 'heart'}
              >
                <span>{favorite ? 'Remove from' : 'Add to'}</span>
                <span>
                  <Heart />
                </span>
              </BtnAddTo>
            </BtnWrapper>
          </Modal.Body>
          {showAttentionModal && (
            <ModalAttention
              show={showAttentionModal}
              onHide={toggleAttentionModal}
            />
          )}
        </ModalContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};
