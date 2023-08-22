import { styled } from 'styled-components';

export const ModalBox = styled.div`
  outline: 1px solid black;
  width: 200px;
  height: 200px;

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
