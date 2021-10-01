import { Modal} from "react-bootstrap";
import React from "react";

const Detail = (show, onHide, hero) => {
  return (
    <Modal
      {...show}
      {...onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {hero ? hero.name : ""}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Datos del heroe
         */}
      </Modal.Body>
    </Modal>
  );
};
export default Detail;
