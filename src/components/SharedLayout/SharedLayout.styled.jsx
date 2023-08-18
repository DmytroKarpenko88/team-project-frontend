import styled from 'styled-components';

export const LayoutContainer = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  margin: 0 auto;
  padding: 20px 20px 0;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 26px 32px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 30px 16px 0;
  }
`;
