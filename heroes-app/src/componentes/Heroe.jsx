import React from "react";
// import HeroeVacio from "./HeroeVacio";
import { v4 as uuid } from "uuid";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";

const Heroe = ({ listIndex, hero, setHero, onClickDetail }) => {
  const { id, name, powerstats, alignment, image } = hero;
  const handleDeleteHero = () => {
    const nullHero = {
      id: null,
      name: null,
      powerstats: {},
      bibliography: {},
      alignment: null,
      appearance: null,
      work: {},
      connections: {},
      image: {
        url: null,
      },
    };
    setHero(nullHero, listIndex);
  };

  const handleSetHero = () => {
    const newHero = {
      id: 70,
      name: "Batman",
      powerstats: {
        intelligence: "100",
        strength: "26",
      },
      alignment: "good",
      appearance: {
        gender: "Male",
        race: "Human",
        height: ["6'2", "188 cm"],
        weight: ["210 lb", "95 kg"],
        eyeColor: "blue",
        haircolor: "black",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
      },
    };
    setHero(newHero, listIndex);
  };

  const handleShowDetail = () => {
    onClickDetail();
  };

  if (id === -1 || id === null) {
    return (
      <div className="py-2">
        <Card>
          <Card.Body className="p-0">
            <div className="p-0">No hay heroe</div>
            {/* //Todo: Agregar imagen nula */}
            <Container>
              <Row className="justify-content-center" sm="auto" xl="auto">
                <Button variant="outline-success" onClick={handleSetHero}>
                  Agregar
                </Button>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="py-2">
        <Card bg={alignment === "good" ? "primary" : "danger"}>
          <Card.Body className="p-0">
            <div className="p-0">
              <Card.Text className="text-center">
                {name.toUpperCase()}
              </Card.Text>
            </div>
            <Card.Img
              onClick={handleShowDetail}
              variant="top"
              src={image.url}
              style={{ height: "15rem" }}
            ></Card.Img>
            <Card bd="light">
              <Card.Body className="p-1">
                <Card.Text>Powerstats</Card.Text>
                <Row
                  className="justify-content-center"
                  xs={2}
                  md={2}
                  lg={2}
                  xl={3}
                  xxl={3}
                >
                  {Object.keys(powerstats).map((value) => {
                    return (
                      <Col key={uuid()} className="d-grid ">
                        <Button size="sm" variant="outline-primary" disabled>
                          {value}
                          <br></br>
                          <Badge style={{ backgroundColor: "#0d6efd" }}>
                            {powerstats[value]}
                          </Badge>
                        </Button>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Body>
              <Card.Footer>
                <Row sm="auto" md="auto" lg="auto" xl="auto">
                  <Button variant="success" onClick={() => alert("holis")}>
                    Cambiar
                  </Button>
                  <Button variant="secondary" onClick={handleDeleteHero}>
                    Eliminar
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
            <Container></Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
};
export default Heroe;
