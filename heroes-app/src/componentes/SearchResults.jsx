import React from "react";
import { v4 as uuid } from "uuid";
import { Col, Row, Container, Image, Button } from "react-bootstrap";

export const SearchResults = (props) => {
  const handleAddHero = (hero, e) => {
    props.addHero(hero);
    // console.log(props.results);
    console.log(hero.id);
    const newResults = props.results.filter((result) => { console.log(result.id); return result.id !== hero.id});
    props.removeHeroResult(newResults);
  };
  return (
    <div>
      <Row className="justify-content-center" xs={2} md={2} lg={2} xl={2}>
        {props.results.map((heroe) => {
          return (
            <Col key={uuid()} className="p-1">
              <Container>
                <Image src={heroe.image.url}></Image>
                <p>{heroe.name}</p>
                {props.teamFull ? (
                  ""
                ) : (
                  <Button
                    size="sm"
                    onClick={(e) => handleAddHero(heroe, e)}
                  >
                    Agregar
                  </Button>
                )}
              </Container>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
