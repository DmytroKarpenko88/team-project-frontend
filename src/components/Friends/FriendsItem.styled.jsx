import { styled } from 'styled-components';
import { theme } from 'styles';

const Item = styled.li`
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    margin: 0 auto 20px auto;
  }

  border-radius: 40px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  transition: all ${theme.transition.main};

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.a`
     font-size: 20px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
     color: #54adff;
     cursor: pointer;
     display: block;
    text-align: center;
    transition: all ${theme.transition.main};


    &:hover {
      color: #FFC107;
      transform: scale(1.1);
    }

    &:focus {
  color: #FFC107;
      transform: scale(1.1);

    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 20px;
  align-items: flex-start;
`;

const FriendsInfoWrapper = styled.div``;

const FriendsInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 12px;
`;

const ImageWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    height: 104px;
    display: flex;
  }

  min-width: 40%;
`;

const InfoTitle = styled.a`
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }

  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  transition: all ${theme.transition.main};
  color: #111111;

  &:hover {
    color: #00c3ad;
  }

  &:focus {
    color: #00c3ad;
  }
`;

const InfoText = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }

  color: #111111;
  font-family: Manrope;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export {
  Item,
  Title,
  ItemWrapper,
  FriendsInfoWrapper,
  FriendsInfoList,
  ImageWrapper,
  InfoTitle,
  InfoText,
};
