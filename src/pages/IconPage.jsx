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
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';
import { Box, SpanStyled } from './IconPage.styled';
import { ModalCongrats } from 'components/Modals/ModalCongrats/ModalCongrats';
import { ModalAttention } from 'components/Modals/ModalAttention/ModalAttention';
import { ModalDelete } from 'components/Modals/ModalDelete/ModalDelete';

const IconPage = () => {
  const [favorite, setFavorite] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <Box>
      <h1>IconPage</h1>

      <Paw />
      <Plus />
      <PlusSmall />
      <Cross />
      <Trash />
      <Search />
      <button
        className={favorite ? 'heart favorite' : 'heart'}
        onClick={() => setFavorite(!favorite)}
      >
        <Heart />
      </button>

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
      <Button
        variant="primary"
        onClick={() => {
          setModalShow(true);
        }}
      >
        Open modal
      </Button>

      <ModalCongrats show={modalShow} onHide={() => setModalShow(false)} />
      <ModalAttention show={modalShow} onHide={() => setModalShow(false)} />
      <ModalDelete show={modalShow} onHide={() => setModalShow(false)} />
    </Box>
  );
};

export default IconPage;
