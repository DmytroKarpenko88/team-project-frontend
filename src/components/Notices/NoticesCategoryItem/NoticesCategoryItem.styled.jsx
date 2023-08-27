import styled from 'styled-components';
import { theme } from 'styles';

export const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;

  width: 100%;
  height: 456px;
  background-color: ${theme.colors.white};
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: ${theme.boxShadows.main};

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }

  transition: transform 250ms ${theme.transition.main};

  &:hover {
    transform: scale(1.01);
    transition: transform 250ms ${theme.transition.main};
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  cursor: pointer;
  // @media screen and (min-width: 768px) {
  //   width: 336px;
  // }

  // @media screen and (min-width: 1280px) {
  //   width: 288px;
  // }
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.blueLight2};

  font-size: ${theme.fontSizes.xs};
  line-height: 19px;

  border: none;

  &.heart.favorite svg {
    fill: ${theme.colors.blue};
  }

  &.heart svg:hover,
  svg:focus {
    fill: ${theme.colors.blue};
    stroke: ${theme.colors.blue};
  }
`;

export const DeleteNoticeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 68px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.blueLight};

  border: none;

  &:hover,
  &:focus {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};

    svg {
      stroke: ${theme.colors.white};
    }
`;

export const FilterStatus = styled.div`
  width: 126px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 16px;
  left: 0;

  background-color: ${theme.colors.blueLight2};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  font-weight: ${theme.fonts.main.semiBold};
  font-size: ${theme.fontSizes.xs};
`;

export const ListPetInfo = styled.div`
  position: absolute;
  bottom: 12px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 12px;

  /* svg:focus,
  svg:hover {
    stroke: ${theme.colors.blue};
  } */

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const LocationItem = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 28px;
  background-color: ${theme.colors.blueLight2};
  border-radius: 16px;

  transition: color ${theme.transition.duration} ${theme.transition.main};
  transition: background ${theme.transition.duration} ${theme.transition.main};

  cursor: pointer;

  font-weight: ${theme.fonts.main.semiBold};
  font-size: ${theme.fontSizes.xs};
  text-overflow: ellipsis;

  &:hover,
  &:focus {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};

    svg {
      stroke: ${theme.colors.white};
    }
  }
`;

export const AgeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 80px;
  height: 28px;
  background-color: ${theme.colors.blueLight2};
  border-radius: 16px;

  transition: color ${theme.transition.duration} ${theme.transition.main};
  transition: background ${theme.transition.duration} ${theme.transition.main};

  cursor: pointer;

  font-weight: ${theme.fonts.main.semiBold};
  font-size: ${theme.fontSizes.xs};
  text-overflow: ellipsis;

  &:hover,
  &:focus {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    svg {
      stroke: ${theme.colors.white};
    }
  }
`;

export const SexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 80px;
  height: 28px;
  background-color: ${theme.colors.blueLight2};
  border-radius: 16px;

  transition: color ${theme.transition.duration} ${theme.transition.main};
  transition: background ${theme.transition.duration} ${theme.transition.main};

  cursor: pointer;

  font-weight: ${theme.fonts.main.semiBold};
  font-size: ${theme.fontSizes.xs};

  &:hover,
  &:focus {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};

    svg {
      stroke: ${theme.colors.white};
    }
  }
`;

export const TextItem = styled.h2`
  font-size: 24px;
  width: 231px;
  font-weight: ${theme.fonts.main.bold};

  padding: 20px;
  word-break: break-word;
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  background-color: ${theme.colors.white};
  width: 248px;
  height: 40px;
  outline: none;
  border-width: 1px;
  border-color: ${theme.colors.blue};
  border-style: solid;
  border-radius: 40px;
  color: ${theme.colors.blue};
  cursor: pointer;
  margin-bottom: 22px;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: color 250ms ${theme.transition.main},
    background-color 250ms ${theme.transition.main};
  svg {
    display: none;
  }
  &:focus,
  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.blue};
  }
  &:hover svg {
    display: inline-block;
    fill: ${theme.colors.white};
  }
  svg {
    fill: ${theme.colors.white};
  }
`;

export const Box = styled.div``;
