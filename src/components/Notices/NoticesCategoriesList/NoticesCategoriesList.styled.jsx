import styled from 'styled-components';
import { theme } from 'styles';

export const NoticeList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const TextBox = styled.div`
  width: 100%;
  margin: 40px 0;
`;
export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;

  color: ${theme.colors.black};
  font-weight: 700;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
