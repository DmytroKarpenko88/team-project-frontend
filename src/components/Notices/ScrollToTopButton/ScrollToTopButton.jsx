import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { ArrowLeft } from 'components/icons';
import { ContainerScroll } from './ScrollToTopButton.styled';

export const ScrollToTopButton = () => {
  return (
    <>
      <ScrollToTop showUnder={160} duration={200}>
        <ContainerScroll>
          <ArrowLeft />
        </ContainerScroll>
      </ScrollToTop>
    </>
  );
};
