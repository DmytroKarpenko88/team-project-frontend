import styled from 'styled-components';
import { theme } from 'styles';

export const NoticeList = styled.div`
margin: 0:
padding: 0;
list-style: none;
margin-bottom: 40px;

@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

`;

export const Text = styled.p`
  color: ${theme.colors.black};
  font-weight: 700;
  font-size: 24px;
  margin: 40px auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
