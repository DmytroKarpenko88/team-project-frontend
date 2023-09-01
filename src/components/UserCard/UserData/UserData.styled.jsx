import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles';

const MainContainer = styled.section`
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 46px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 32px;
    width: 1280px;
  }
`;

const Title = styled.h2`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.main.medium};
  font-size: ${theme.fontSizes.l};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.8px;
  margin-bottom: 18px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 28px;
    margin-bottom: 48px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 24px;
  }
`;

const UserCardContainer = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 40px;
  background: ${theme.colors.white};
  box-shadow: ${theme.boxShadows.main};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
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
    fill: ${theme.colors.blue};
  }
  &:hover {
    svg {
      fill: ${theme.colors.yellow};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
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
  gap: ${theme.spacing.step * 1}px;
  color: ${theme.colors.white};
  font-weight: 700;
  width: 134px;
  padding: 8px 20px;
  font-size: ${theme.fontSizes.m};
  line-height: normal;
  letter-spacing: 0.64px;
  background: ${theme.colors.blue};
  border: none;
  border-radius: 40px;
  box-shadow: ${theme.boxShadows.main};
  transition: all ${theme.transition.main};
  svg {
    stroke: ${theme.colors.white};
  }
  &:hover,
  &:focus {
    background: ${theme.colors.grBlue2};
    svg {
      stroke: ${theme.colors.white};
    }
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
