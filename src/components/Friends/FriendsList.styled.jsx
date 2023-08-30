import { styled } from 'styled-components';

const FriendsListContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`;

const FriendsListItem = styled.ul`

 @media screen and (min-width: 768px) {
      display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1281px) 
    gap: 36px;
  }

`;

export { FriendsListContainer, FriendsListItem };
