import styled from 'styled-components';
import { theme } from 'styles';

export const List = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;

  width: 280px;
  height: 456px;
  background-color: #fff;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.01);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 280px;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Img = styled.img`
  width: 280px;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const HeartItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.blueLight2};

  font-size: ${theme.fontSizes.xs}

  border: none;
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

export const LocationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 8px;
  bottom: 12px;
  gap: 4px;

  width: 85px;
  height: 28px;
  background-color: ${theme.colors.blueLight2};
  border-radius: 16px;

  white-space: nowrap;
  overflow: hidden;

  font-weight: ${theme.fonts.main.semiBold};
  font-size: ${theme.fontSizes.xs};
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 24px;
  }
`;

export const AgeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 97px;
  bottom: 12px;
  gap: 4px;

  width: 85px;
  height: 28px;
  background-color: ${theme.colors.blueLight2};
  border-radius: 16px;

  white-space: nowrap;
  overflow: hidden;

  font-weight: ${theme.fonts.main.semiBold};
  font-size: ${theme.fontSizes.xs};
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 128px;
  }
`;

export const SexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 187px;
  bottom: 12px;
  gap: 4px;

  width: 85px;
  height: 28px;
  background-color: ${theme.colors.blueLight2};
  border-radius: 16px;

  font-weight: ${theme.fonts.main.semiBold};
  font-size: ${theme.fontSizes.xs};

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 232px;
  }
`;
export const TitleItem = styled.h2`
  font-size: 24px;
  width: 231px;
  font-weight: ${theme.fonts.main.bold};

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  background-color: ${theme.colors.white};
  width: 248px;
  height: 38px;
  outline: none;
  border-width: 1px;
  border-color: ${theme.colors.blue};
  border-style: solid;
  border-radius: 40px;
  color: ${theme.colors.blue};
  cursor: pointer;
  margin-bottom: 24px;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.blue};
    svg: {
      fill: ${theme.colors.blue};
    }
  }
`;
