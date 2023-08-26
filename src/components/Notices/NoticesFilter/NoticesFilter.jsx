import React from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { Filter } from 'components/icons';
import { FilterBtn, Span } from './NoticesFilter.styled';

export const NoticesFilter = () => {
  const screenWidth = useWindowSize();
  return (
    <FilterBtn>
      {screenWidth < 768 && <Filter />}

      {screenWidth >= 768 && <IconContainer />}
    </FilterBtn>
  );
};

const IconContainer = () => {
  return (
    <>
      <Span>Filter</Span>
      <Filter />
    </>
  );
};
