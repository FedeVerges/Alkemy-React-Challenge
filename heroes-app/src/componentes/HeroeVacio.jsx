import React from "react";
import { Card, Button, Row, Image, Container } from "react-bootstrap";

const HeroeVacio = ({ hero = {}, setHero, id }) => {
  //TODO: comportamiento para que agergue un heore a la lista de heores.
  return (
    <div className="py-2">
      <Card>
        <Card.Body className="p-0">
          <div className="p-0">No hay heroe</div>
          <Container>
            <Row className="justify-content-center" sm="auto" xl="auto">
              <Button
                variant="outline-success"
                onClick={() => setHero(hero, id)}
              >
                Agregar
              </Button>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};
export default HeroeVacio;
