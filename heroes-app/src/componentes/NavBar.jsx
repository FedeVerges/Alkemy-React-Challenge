import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div>
      <Navbar sticky="top" className="nav-bar ">
        <Container fluid className="container-nav-bar">
          <Navbar.Brand className="nav-bar-logo" href="/">
            Hero App
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="nav-bar-link" href="/equipo">Equipo</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
        
      </Navbar>
    </div>
  );
};

export default NavigationBar;
