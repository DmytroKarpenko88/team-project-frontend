//import { useState } from 'react';
//import styles from "./ModalApproveAction.styled";
import { Cross, Paw } from 'components/icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalApproveAction = props => {
  //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <button onClick={props.onHide}>
          <Cross />
        </button>
        {/* <Modal.Header closeButton /> */}
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>
            <span>Go to profile</span>
            <span>
              <Paw />
            </span>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalApproveAction;
