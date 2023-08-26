// import styled from 'styled-components';
// import { theme } from 'styles';
// import { NavLink } from 'react-bootstrap';

// export const ModalCard = styled.div`
//   padding: 44px 12px 16px;
//   /* width: 280px; */

//   @media screen and (min-width: 768px) {
//     padding: 32px 32px 24px;
//     width: 681px;
//   }
// `;

// export const ModalCloseBtn = styled.div``;

// export const ModalCardInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;

//   margin-bottom: 12px;

//   @media screen and (min-width: 768px) {
//     flex-direction: row;
//     gap: 24px;
//   }
// `;
// export const PhotoContainer = styled.div`
//   position: relative;

//   height: 240px;
//   width: 240px;

//   margin: 0 auto;

//   @media screen and (min-width: 768px) {
//     height: 298px;
//     width: 262px;
//   }
// `;
// export const Text = styled.p``;
// export const PetPhoto = styled.img`
//   height: 100%;
//   width: 100%;

//   border-radius: 0 0 40px 40px;

//   object-fit: cover;
// `;

// export const CategoryItem = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   left: 20px;
//   top: 16px;
//   width: 132px;
//   height: 32px;
//   background-color: ${theme.colors.blueLight};
//   border-top-right-radius: 40px;

//   border-bottom-right-radius: 40px;

//   @media screen and (min-width: 768px) {
//     left: 0;
//     top: 16px;
//   }
// `;

// export const ModalCardText = styled.div`
//   @media screen and (min-width: 768px) {
//     flex-grow: 1;
//     flex-shrink: 1;
//     flex-basis: 0%;
//   }
// `;
// export const Title = styled.h2`
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   width: 198px;
//   color: #000;
//   font-size: 24px;
//   font-weight: 700;
//   letter-spacing: -0.24px;
//   margin: 0;
//   margin-left: 12px;
//   margin-top: 12px;
//   margin-bottom: 20px;

//   @media screen and (min-width: 768px) {
//     font-size: 28px;
//     letter-spacing: -0.28px;
//     /* margin-bottom: 20px; */
//     width: 321px;

//     margin-left: 0px;
//     margin-top: 0px;
//   }
// `;

// export const Table = styled.table`
//   width: 256px;

//   table-layout: fixed;
//   border-color: inherit;

//   text-indent: 0;

//   @media screen and (min-width: 768px) {
//     width: 340px;
//   }
// `;
// export const Tbody = styled.tbody`
//   display: table-row-group;

//   border-color: inherit;

//   vertical-align: middle;
// `;

// export const Tr = styled.tr`
//   display: table-row;

//   vertical-align: inherit;

//   border-color: inherit;
// `;

// export const TdName = styled.td`
//   display: table-cell;
//   width: 80px;

//   font-family: ${theme.fonts.main.semiBold};
//   font-size: ${theme.fontSizes.sm};
//   line-height: 19px;
//   vertical-align: inherit;

//   color: ${theme.colors.text};

//   @media screen and (min-width: 768px) {
//     width: 120px;

//     font-size: ${theme.fontSizes.md};
//     line-height: 22px;
//   }
// `;
// export const TdValue = styled.td`
//   word-wrap: break-word;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   font-family: ${theme.fonts.main.medium};
//   font-size: ${props => props.theme.fontSizes.xs};
//   line-height: 16px;

//   color: ${props => props.theme.colors.text};

//   @media screen and (min-width: 768px) {
//     font-size: ${props => props.theme.fontSizes.md};
//     line-height: 22px;
//   }
// `;

// export const Link = styled(NavLink)`
//   word-wrap: break-word;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   text-decoration: underline;

//   color: ${props => props.theme.colors.yellow};

//   cursor: pointer;
// `;

// export const Comment = styled.p`
//   margin-bottom: 12px;
//   word-wrap: break-word;

//   font-family: ${props => props.theme.fonts.main.medium};
//   font-size: ${props => props.theme.fontSizes.sm};
//   letter-spacing: 0.04em;
//   line-height: 19px;

//   overflow: hidden;
//   text-overflow: ellipsis;

//   @media screen and (min-width: 768px) {
//     margin-bottom: 70px;

//     font-size: ${props => props.theme.fontSizes.md};
//     line-height: 24px;
//   }
// `;

// export const ContainerBtn = styled.div`
//   // display: flex;
//   // flex-direction: column-reverse;
//   // gap: 8px;

//   // @media screen and (min-width: 768px) {
//   //   flex-direction: row;
//   //   justify-content: flex-end;
//   //   gap: 17px;
//   // }
// `;

// export const Button = styled.button.withConfig({
//   shouldForwardProp: prop => prop !== 'active',
// })`
//   display: flex;
//   width: 256px;
//   height: 40px;
//   padding: 8px 20px;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   margin-left: 12px;
//   margin-right: 12px;
//   border-radius: 40px;
//   border: 2px solid #54adff;
//   background-color: ${({ primary }) =>
//     primary ? 'transparent' : `${theme.colors.blue}`};
//   cursor: pointer;
//   &:first-child {
//     margin-bottom: 8px;
//   }
//   &:hover {
//     background: ${theme.colors.grBlue2};
//     p {
//       color: ${theme.colors.bgColor};
//     }
//   }
//   p {
//     color: ${({ primary }) =>
//       primary ? `${theme.colors.blue}` : `${theme.colors.bgColor}`};
//     font-size: 16px;

//     font-weight: 700;
//     line-height: normal;
//     letter-spacing: 0.64px;
//   }
//   svg {
//     fill: #fff;
//   }
//   @media screen and (min-width: 768px) {
//     width: 129px;
//     height: 40px;
//     margin-left: 0px;
//     margin-right: 0px;
//     &:first-child {
//       margin-bottom: 0px;
//     }
//   }
// `;

// export const AddButton = styled.button`
//   display: flex;
//   width: 256px;
//   height: 40px;
//   padding: 8px 20px;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   margin-left: 12px;
//   margin-right: 12px;
//   border-radius: 40px;
//   border: 2px solid ${theme.colors.blueLight};
//   background-color: transparent;
//   cursor: pointer;

//   svg {
//     fill: ${theme.colors.blueLight};
//   }

//   &:first-child {
//     margin-bottom: 8px;
//   }
//   &:hover {
//     background: ${theme.colors.grBlue2};

//     svg {
//       fill: #fff;
//     }

//       color: ${theme.colors.blue};

//     font-size: 16px;
//     font-weight: 700;
//     line-height: normal;
//     letter-spacing: 0.64px;

//   svg {
//     fill: var(--btn-bg-color);
//   }
//   @media screen and (min-width: 768px) {
//     width: 129px;
//     height: 40px;
//     margin-left: 0px;
//     margin-right: 0px;
//     margin-bottom: 0px;
//   }
// `;

// // export const RemoveButton = styled.button`
// //   display: flex;
// //   width: 256px;
// //   height: 40px;
// //   padding: 8px 20px;
// //   justify-content: center;
// //   align-items: center;
// //   gap: 8px;
// //   margin-left: 12px;
// //   margin-right: 12px;
// //   border-radius: 40px;
// //   border: 2px solid #54adff;
// //   background-color: ${props =>
// //     props.$primary ? 'transparent' : `${theme.colors.blue}`};
// //   cursor: pointer;
// //   &:first-child {
// //     margin-bottom: 8px;
// //   }
// //   &:hover {
// //     background: ${theme.colors.grBlue2};
// //     p {
// //       color: ${theme.colors.bgColor};
// //     }
// //   }
// //   p {
// //     color: ${props =>
// //       props.$primary ? `${theme.colors.blue}` : `${theme.colors.bgColor}`};
// //     font-size: 16px;
// //     font-weight: 700;
// //     line-height: normal;
// //     letter-spacing: 0.64px;
// //   }
// //   svg {
// //     fill: ${theme.colors.white};
// //   }
// //   @media screen and (min-width: 768px) {
// //     width: 190px;
// //     height: 40px;
// //     margin-left: 0px;
// //     margin-right: 0px;
// //     margin-bottom: 0px;
// //   }
// // `;

// // export const StyledLink = styled(Link)`
// //   color: #ffc107;
// //   font-size: 12px;
// //   font-weight: 500;
// //   line-height: normal;
// //   text-decoration-line: ${props => (props.$privat ? 'underline' : 'none')};
// //   cursor: pointer;

// //   @media screen and (min-width: 768px) {
// //     font-size: 16px;
// //   }
// // `;
// // export const Container = styled.div`
// //   margin-top: 12px;
// //   @media screen and (min-width: 768px) {
// //     display: flex;
// //     flex-direction: row-reverse;
// //     align-items: baseline;
// //     justify-content: flex-start;
// //     gap: 17px;
// //   }
// // `;

// // export const ModalCloseBtn = styled.button`
// //   position: absolute;
// //   right: 16px;
// //   top: 16px;

// //   border: none;
// //   outline: none;
// //   cursor: pointer;
// //   background-color: transparent;

// //   @media screen and (min-width: 768px) {
// //     right: 24px;
// //     top: 24px;
// //   }
// // `;
