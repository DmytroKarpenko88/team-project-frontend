import styled from 'styled-components';
import { theme } from 'styles';

export const ContainerScroll = styled.div`
  background: ${theme.colors.grBlue};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`;
