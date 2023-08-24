import { styled } from 'styled-components';

export const Modalbox = styled.div`
  outline: 6px solid black;
  width: 280px;
  //height: 200px;
  padding: 60px 16px;
  display: flex;
  flex-direction: column;

  .Button_title {
  }

  .Icon {
    stroke: green;
  }

  .Icon:hover,
  .Icon:focus {
    stroke: red;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  color: red;
`;
export const  ModalCont = styled.button`
color: black;
`