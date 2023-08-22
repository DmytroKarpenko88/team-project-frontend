//import { useState } from 'react';
//import styles from "./ModalApproveAction.styled";
import { Cross, Paw } from 'components/icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalBox, Title } from './ModalApproveAction.styled';

const ModalApproveAction = props => {
  //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalBox>
          <button onClick={props.onHide}>
            <Cross />
          </button>

          <Button onClick={props.onHide}>
            <Title className="111111111">Go to profile</Title>
            <span className="Icon">
              <Paw />
            </span>
          </Button>
        </ModalBox>
        {/* <Modal.Header closeButton /> */}
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalApproveAction;
