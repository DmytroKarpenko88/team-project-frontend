import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  scroll-behavior: smooth;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 24px;
  // margin-top: 20px;

  @media screen and (min-width: 768px) {
    // margin-top: 40px;
    gap: 80px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;

    // width: 100%;
  }
`;

export const Boxing = styled.div`
  display: flex;
  align-items: centre;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;
