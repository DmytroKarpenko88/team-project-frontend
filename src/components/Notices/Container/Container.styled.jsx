import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  // padding: 0 20px;
  // background-color: #fdf7f2;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    width: 1280px;
  }
`;
