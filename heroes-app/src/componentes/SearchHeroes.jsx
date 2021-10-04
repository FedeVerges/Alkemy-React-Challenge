import React, { useState } from "react";
import { FormControl, Card, Container, InputGroup } from "react-bootstrap";
import { SearchResults } from "./SearchResults";
import { searchHeroes } from "../services/alkemy_api";

const newHero = {
  id: 70,
  name: "Batman",
  powerstats: {
    intelligence: "100",
    strength: "26",
    intelligence1: "100",
    strength1: "26",
    intelligence2: "100",
    strength2: "26",
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
const SearchHero = (props) => {
  const [heroes, setHeroes] = useState([
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.value;
    if (name !== "" && name && name.length >= 3) {
      setLoading(true);
      searchHeroes(name).then((results) => {
        setLoading(false);
        console.log(results);
        if (results.length > 0) {
          setHeroes(results);
        }
      });
    }
  };
  const handleHeroeResults = (listResults) => {
    setHeroes(listResults);
  }
  return (
    <Card className="overflow-auto" style={{ maxHeight: "40rem" }}>
      <Container className="my-2">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Buscar
          </InputGroup.Text>
          <FormControl
            placeholder="Ingresa el nombre de tu heroe"
            onChange={handleChange}
          />
        </InputGroup>
        {/* <Form>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Ingresa el nombre de tu heroe"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              {loading ? "Cargando..." : ""}
            </Form.Text>
          </Form.Group>
        </Form> */}
        <SearchResults
          addHero={props.addHero}
          teamFull={props.teamFull}
          results={heroes}
          removeHeroResult={handleHeroeResults}
        ></SearchResults>
      </Container>
    </Card>
  );
};

export default SearchHero;
