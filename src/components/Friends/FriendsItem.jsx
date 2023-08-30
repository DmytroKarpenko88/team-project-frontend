import React from 'react';
import {
  Item,
  Title,
  ItemWrapper,
  FriendsInfoWrapper,
  FriendsInfoList,
  ImageWrapper,
  InfoTitle,
  InfoText,
} from './FriendsItem.styled';

import myImage from '../../images/friends/default-friends.png';

const FriendsItem = ({ friends }) => {
  const { imageUrl, title, url, addressUrl, email, phone, workDays, address } =
    friends;

  console.table(friends);

  return (
    <Item>
      <Title href={url && url}>{title}</Title>

      <ItemWrapper>
        <ImageWrapper>
          <img src={imageUrl ? imageUrl : myImage} alt={title} />
        </ImageWrapper>
        <FriendsInfoWrapper>
          <FriendsInfoList>
            <li>
              <InfoTitle>Time:</InfoTitle>
              <InfoText>
                {workDays === null ||
                workDays === undefined ||
                workDays.length === 0 ||
                workDays[0].isOpen === false
                  ? 'day and night'
                  : `${workDays[0].from} - ${workDays[0].to}`}
              </InfoText>
            </li>

            <li>
              <InfoTitle href={addressUrl && addressUrl} target="_blank">
                Adress:{' '}
              </InfoTitle>
              <InfoText>{address ? address : 'website only'}</InfoText>
            </li>

            <li>
              <InfoTitle>Email: </InfoTitle>
              <InfoText>{email ? email : 'website only'}</InfoText>
            </li>

            <li>
              <InfoTitle>Phone: </InfoTitle>
              <InfoText>{phone ? phone : 'email only'}</InfoText>
            </li>
          </FriendsInfoList>
        </FriendsInfoWrapper>
      </ItemWrapper>
    </Item>
  );
};

export default FriendsItem;
