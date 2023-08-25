//import { useState } from 'react';
//import styles from "./ModalApproveAction.styled";
import { Cross, Paw } from 'components/icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Modalbox, Title } from './ModalApproveAction.styled';


//const modalRoot = document.querySelector('#modal-root');
const ModalApproveAction = props => {
  //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);

  return (
    <>
      <Modalbox
        {...props}
        size="xl'"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <modal-content>
          <button onClick={props.onHide}>
            <Cross />
          </button>

          <Button onClick={props.onHide}>
            <Title className="111111111">Go to profile</Title>
            <span className="Icon">
              <Paw />
            </span>
          </Button>
        </modal-content>
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
      </Modalbox>
    </>
    //modalRoot
  );
};
export default ModalApproveAction;
