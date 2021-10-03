import { Modal, Button} from "react-bootstrap";
import React from "react";


const Detail = (props) => {
  return (
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.hero ? props.hero.name : ""}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Datos del heroe
         */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Detail;
