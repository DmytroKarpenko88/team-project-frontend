import styled from 'styled-components';
import { theme } from 'styles';

export const LayoutContainer = styled.div`
  min-width: 320px;
  margin: 0 auto;
  padding: 20px 20px 0;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 768px;
    padding: 26px 32px 0;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1280px;
    padding: 20px 16px 0;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
    }
  }
`;
