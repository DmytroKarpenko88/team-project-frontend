import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.section`
  max-width: 100vw;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 46px;

  @media screen and (min-width: 768px) {
    flex-direction: raw;
    gap: 32px;
  }
`;

const Title = styled.h2`
  color: #000;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 48px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 24px;
  }
`;

const UserCardContainer = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 1200px) {
    height: max-content;
  }
`;

const EditBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  margin: 0;
  padding: 0;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    fill: var(--btn-bg-color);
  }
  &:hover {
    svg {
      fill: var(--header-items-color);
    }
  }

  @media screen and (min-width: 768px) {
    right: 18px;
  }
`;

const PetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
`;

const AddPetBtn = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #ffffff;
  font-weight: 700;
  width: 134px;
  padding: 8px 20px;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0.64px;
  background-color: var(--btn-bg-color);
  border: none;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  transition: background-color var(--duration) var(--cubic);
  &:hover,
  &:focus {
    background: var(--hover-btn-bg-color);
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export {
  UserCardContainer,
  MainContainer,
  Title,
  EditBtn,
  PetsContainer,
  AddPetBtn,
};