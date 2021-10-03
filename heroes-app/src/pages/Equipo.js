import React, { useState, useEffect } from "react";
import Heroe from "../componentes/Heroe.jsx";
import Detail from "../componentes/Detail.jsx";
import SearchHero from "../componentes/SearchHeroes.jsx";
import { v4 as uuid } from "uuid";
import { Card, Col, Row, Container, Badge, ListGroup } from "react-bootstrap";
import useUser from "../hooks/useUser.js";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

// Posee una lista de 6 heores, 3 buenos y 3 malos.
const heroesPerTeam = 6;
const initialList = () => {
  let list = [];
  for (let index = 0; index < heroesPerTeam; index++) {
    list.push({
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
    });
  }
  return list;
};
const Equipo = () => {
  const [team, setTeam] = useState([]);
  const [totalPowerstats, setTotal] = useState({});
  const { isLogged } = useUser();

  // Modal State.
  const [detailShow, setDetailShow] = useState(false);
  const [detailData, setDetailData] = useState();

  const handleCloseModal = () => {
    setDetailShow(false);
  };
  const handleOpenModal = (index) => {
    setDetailData(team[index]);
    setDetailShow(true);
  };

  const handleAddHero = (data) => {
    const hero = {
      id: data.id,
      name: data.name,
      powerstats: data.powerstats,
      alignment: data.alignment,
      appearance: data.appearance,
      work: data.work,
      connections: data.connections,
      image: data.image,
    };
    if (team.length < 7) {
      let newTeam = [...team, hero];
      setTeam(newTeam);
    }
  };

  const handleDeleteHero = (index) => {
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
    team[index] = nullHero;
    let newTeam = [...team];
    setTeam(newTeam);
  };

  useEffect(() => {
    const calculatePowerStats = () => {
      let newTotalPowerstats = {};
      team.forEach((heroe) => {
        let powerstats = Object.keys(heroe.powerstats);
        if (powerstats.length > 0) {
          powerstats.map((key) => {
            return newTotalPowerstats[key] == null
              ? (newTotalPowerstats[key] = parseInt(heroe.powerstats[key]))
              : (newTotalPowerstats[key] += parseInt(heroe.powerstats[key]));
          });
        }
      });
      setTotal(newTotalPowerstats);
    };
    calculatePowerStats();
  }, [team]);

  if (!isLogged) {
    return (
      <Route>{<Redirect to="/login" />}</Route>
    );
  } else {
    return (
      <Container className="container-equipo" fluid>
        <Row xs={1} md={2} lg={2} xl={2}>
          <Col md={4} lg={4} xl={4}>
            <div>
              <Card>
                <Card.Header>
                  <h2 className="text-center">Powerstats</h2>
                </Card.Header>
                <Card.Body>
                  <ListGroup>
                    {Object.keys(totalPowerstats).map((powerstat) => {
                      return (
                        <ListGroup.Item
                          key={uuid()}
                          variant="secondary"
                          className="m-2"
                        >
                          {powerstat}{" "}
                          <Badge style={{ backgroundColor: "#0d6efd" }}>
                            {totalPowerstats[powerstat]}
                          </Badge>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
            <div className="my-2">
              <SearchHero
                addHero={handleAddHero}
                // heroeDiscarted={}
                teamFull={team.length >= heroesPerTeam}
              ></SearchHero>
            </div>
          </Col>
          <Col xs={12} md={8} lg={8} xl={8}>
            <Row className="justify-content-center" xs={2} md={2} lg={3} xl={3}>
              {team.length > 0 ? (
                team.map((hero, index) => {
                  return (
                    <Heroe
                      key={uuid()}
                      listIndex={index}
                      hero={hero}
                      addHero={handleAddHero}
                      deleteHero={handleDeleteHero}
                      onClickDetail={handleOpenModal}
                    />
                  );
                })
              ) : (
                <Col></Col>
              )}
            </Row>
          </Col>
        </Row>
        <Detail
          show={detailShow}
          onHide={handleCloseModal}
          hero={detailData}
        ></Detail>
      </Container>
    );
  }
};
export default Equipo;
