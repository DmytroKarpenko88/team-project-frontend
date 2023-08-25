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
  Filter,
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
import {
  ModalAttention,
  ModalCongrats,
  ModalDelete,
  ModalApproveAction,
  NoticeModal,
} from 'components/Modals';

const IconPage = () => {
  const [favorite, setFavorite] = useState(false);
  const [modalCongratsShow, setModalCongratsShow] = useState(false);
  const [noticeModalShow, setNoticeModalShow] = useState(false);
  const [modalAttentionShow, setModalAttentionShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [modalApproveActionShow, setModalApproveActionShow] = useState(false);

  return (
    <Box>
      {/* icons */}
      <div>
        <h1>IconPage</h1>
        <Paw /> <span>Paw</span>
        <Plus />
        <span>Plus</span>
        <PlusSmall />
        <span>PlusSmall</span>
        <Cross />
        <span>Cross</span>
        <Trash />
        <span>Trash</span>
        <Search />
        <span>Search</span>
        <button
          className={favorite ? 'heart favorite' : 'heart'}
          onClick={() => setFavorite(!favorite)}
        >
          <Heart /> <span>Heart</span>
        </button>
        <span className="user-icon">
          <User />
          <span>User</span>
        </span>
        <Edit />
        <span>Edit</span>
        <Check />
        <span>Check</span>
        <Camera />
        <span>Camera</span>
        <Logout />
        <span>Logout</span>
        <ArrowLeft />
        <span>ArrowLeft</span>
        <Filter />
        <span>Filter</span>
        <Male />
        <span>Male</span>
        <Female />
        <span>Female</span>
        <Location />
        <span>Location</span>
        <Clock />
        <span>Clock</span>
        <MenuHamburger />
        <span>MenuHamburger</span>
        <Filter2 />
        <span>Filter2</span>
        <ChevronDown />
        <span>ChevronDown</span>
        <ChevronUp />
        <span>ChevronUp</span>
        <CheckRound />
        <span>CheckRound</span>
        <Round />
        <span>Round</span>
        <SpanStyled>
          <CrossSmall /> <span>CrossSmall</span>
        </SpanStyled>
        <EyeOpen />
        <span>EyeOpen</span>
        <EyeClose />
        <span>EyeClose</span>
      </div>

      {/* modal buttons */}
      <Button
        variant="primary"
        onClick={() => {
          setModalCongratsShow(true);
        }}
      >
        Congrats!
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          setNoticeModalShow(true);
        }}
      >
        NoticeModal
      </Button>
      <Button
        onClick={() => {
          setModalAttentionShow(true);
        }}
      >
        Attantion!
      </Button>
      <Button
        onClick={() => {
          setModalDeleteShow(true);
        }}
      >
        Delete
      </Button>
      <Button
        onClick={() => {
          setModalApproveActionShow(true);
        }}
      >
        Appruve Action
      </Button>
      <ModalCongrats
        show={modalCongratsShow}
        onHide={() => setModalCongratsShow(false)}
      />
      <ModalAttention
        show={modalAttentionShow}
        onHide={() => setModalAttentionShow(false)}
      />
      <ModalDelete
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
      />
      <ModalApproveAction
        show={modalApproveActionShow}
        onHide={() => setModalApproveActionShow(false)}
      />
      <NoticeModal
        show={noticeModalShow}
        onHide={() => setNoticeModalShow(false)}
      />
    </Box>
  );
};

export default IconPage;
