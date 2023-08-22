import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

// export const Btn = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
//   gap: 8px;

//   background: ${theme.colors.blue};
//   border-radius: 40px;
//   color: ${theme.colors.white};

//   width: 129px;
//   height: 40px;
//   margin-left: auto;

//   border: none;

//   &:hover,
//   &:focus {
//     box-shadow: 2px 2px 4px #456a8e84;
//     transform: scale(1.05);
//     border: none;
//   }

//   svg {
//     stroke: ${theme.colors.white};
//   }
//   svg:hover,
//   svg:focus {
//     stroke: ${theme.colors.white};
//   }
// `;

export const Btn = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;

  position: fixed;
  top: 460px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  color: #ffffff;
  font-weight: 600;

  width: 80px;
  height: 80px;
  padding: 20px 17px;

  font-size: 12px;
  color: #fff;

  background: var(--btn-bg-color);
  border: none;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px #88c6fd30;

  z-index: 1;

  transition: background var(--duration) var(--cubic);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  svg {
    stroke: ${theme.colors.white};
  }
  svg:hover,
  svg:focus {
    stroke: ${theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: static;
    translate: 0 0;

    gap: 8px;

    width: 129px;
    height: 40px;
    padding: 8px 18px;
    border-radius: 40px;

    font-size: 16px;

    // ------
    //   position: static;
    //   display: flex;
    //   flex-direction: row;
    //   justify-content: center;
    //   align-items: center;
    //   padding: 8px;
    //   gap: 8px;

    //   background: ${theme.colors.blue};
    //   border-radius: 40px;
    //   color: ${theme.colors.white};

    //   width: 129px;
    //   height: 40px;
    //   margin-left: auto;

    //   border: none;

    //   &:hover,
    //   &:focus {
    //     box-shadow: 2px 2px 4px #456a8e84;
    //     transform: scale(1.05);
    //     border: none;
    //   }
  }
`;
