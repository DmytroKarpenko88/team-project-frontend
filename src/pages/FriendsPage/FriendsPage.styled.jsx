import { styled } from 'styled-components';

const FriendsPageContainer = styled.section`
  @media screen and (min-width: 768px) {
    margin: 80px auto 70px auto;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
    margin: 40px auto 70px auto;
  }
`;

const Title = styled.h2`
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }

  font-family: Manrope;
  font-weight: 700;
  color: #111111;
  text-align: center;
`;

export { FriendsPageContainer, Title };
