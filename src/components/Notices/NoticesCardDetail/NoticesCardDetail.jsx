// import React from 'react';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// // import { createPortal } from 'react-dom';
// import {
//   ModalCard,
//   ModalCardInfo,
//   ModalCloseBtn,
//   PetPhoto,
//   Title,
//   CategoryItem,
//   PhotoContainer,
//   ModalCardText,
//   Comment,
//   ContainerBtn,
//   Button,
//   AddButton,
//   Text,
//   Link,
//   Table,
//   Tbody,
//   Tr,
//   TdName,
//   TdValue,
// } from './NoticesCardDetail.styled';
// import { CrossSmall, Heart } from 'components/icons';
// // const modalRoot = document.querySelector('#modal-root');

// export const NoticesCardDetail = () => {
//   // const handleClickBackdrop = e => {
//   // if (e.target === e.currentTarget) {
//   // onClose();
//   // }
//   // };

//   // useEffect(() => {
//   // const handleKeyDown = e => {
//   // if (e.code === 'Escape') {
//   // onClose();
//   // }
//   // };
//   // window.addEventListener('keydown', handleKeyDown);
//   // return () => {
//   // window.removeEventListener('keydown', handleKeyDown);
//   // };
//   // }, [onClose]);

//   return (
//     <ModalCard>
//       <ModalCloseBtn>
//         <CrossSmall />
//       </ModalCloseBtn>
//       <ModalCardInfo>
//         <PhotoContainer>
//           <PetPhoto src="" />
//           <CategoryItem>in good hands</CategoryItem>
//         </PhotoContainer>
//         <ModalCardText>
//           <Title>Title</Title>
//           <Table>
//             <Tbody>
//               <Tr>
//                 <TdName>Name:</TdName>
//                 <TdValue>Rich</TdValue>
//               </Tr>
//               <Tr>
//                 <TdName>Birthday:</TdName>
//                 <TdValue>21.09.2020</TdValue>
//               </Tr>
//               <Tr>
//                 <TdName>Type:</TdName>
//                 <TdValue>Pomeranian</TdValue>
//               </Tr>
//               <Tr>
//                 <TdName>Place:</TdName>
//                 <TdValue>Lviv</TdValue>
//               </Tr>
//               <Tr>
//                 <TdName>The sex:</TdName>
//                 <TdValue>male</TdValue>
//               </Tr>
//               <Tr>
//                 <TdName>Email:</TdName>
//                 <TdValue>
//                   <Link>email</Link>
//                 </TdValue>
//               </Tr>
//               <Tr>
//                 <TdName>Phone:</TdName>
//                 <TdValue>
//                   <Link>tel</Link>
//                 </TdValue>
//               </Tr>
//             </Tbody>
//           </Table>
//         </ModalCardText>
//       </ModalCardInfo>

//       <Comment>
//         <Text>Comments:</Text>text
//       </Comment>
//       <ContainerBtn>
//         <Button primary="true" type="button">
//           <Link to="tel:+380971234567">
//             <p primary="true">Contact</p>
//           </Link>
//         </Button>

//         <AddButton type="button">
//           <p>Add to</p>
//           <Heart />
//         </AddButton>
//       </ContainerBtn>
//     </ModalCard>
//   );
// };
