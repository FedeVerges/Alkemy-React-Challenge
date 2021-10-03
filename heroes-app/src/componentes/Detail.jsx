import { Modal, Button } from "react-bootstrap";
import React from "react";

const Detail = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.hero ? props.hero.name : ""}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2> Aliases</h2>
        <p> {props.hero?.biography ? props.hero.biography.aliases : ""}</p>
        <h2> Peso</h2>
        <p> {props.hero?.appearance ? props.hero.appearance.weight[1] : ""}</p>
        <h2> Altura</h2>
        <p> {props.hero?.appearance ? props.hero.appearance.height[1] : ""}</p>
        <h2> Color de ojos</h2>
        <p> {props.hero?.appearance ? props.hero.appearance['eye-color'] : ""}</p>
        <h2> Lugar de Trabajo</h2>
        <p> {props.hero?.work ? props.hero.work.base : ""}</p>

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
