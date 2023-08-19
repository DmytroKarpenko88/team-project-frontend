import {
  ArrowLeft,
  Camera,
  Check,
  CheckRound,
  ChevronDown,
  ChevronUp,
  Clock,
  Cross,
  CrossSmall,
  Edit,
  EyeClose,
  EyeOpen,
  Female,
  Filer,
  Filter2,
  Heart,
  Location,
  Logout,
  Male,
  MenuHamburger,
  Paw,
  Plus,
  PlusSmall,
  Round,
  Search,
  Trash,
  User,
} from 'components/icons';

import React from 'react';
import { Box, SpanStyled } from './IconPage.styled';

const IconPage = () => {
  return (
    <Box>
      <h1>IconPage</h1>
      <Paw />
      <Plus />
      <PlusSmall />
      <Cross />
      <Trash />
      <Search />
      <Heart />
      <span className="user-icon">
        <User />
      </span>

      <Edit />
      <Check />
      <Camera />
      <Logout />
      <ArrowLeft />

      <Filer />
      <Male />
      <Female />
      <Location />
      <Clock />
      <MenuHamburger />
      <Filter2 />
      <ChevronDown />
      <ChevronUp />
      <CheckRound />
      <Round />

      <SpanStyled>
        <CrossSmall />
      </SpanStyled>

      <EyeOpen />
      <EyeClose />
    </Box>
  );
};

export default IconPage;
