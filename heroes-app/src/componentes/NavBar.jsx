import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
const NavigationBar = () => {
  const { isLogged, logout, updateToken } = useUser();
  useEffect(() => {
    updateToken();
  }, [updateToken]);
  return (
    <div>
      <Navbar sticky="top" className="nav-bar ">
        <Container fluid className="container-nav-bar">
          <Navbar.Brand className="nav-bar-logo" href="/">
            Hero App
          </Navbar.Brand>
          {!isLogged ? (
            <Nav>
              {/* <Nav.Link className="nav-bar-link" href="/login">
                Login
              </Nav.Link> */}
            </Nav>
          ) : (
            <Nav>
              <Nav.Link className="nav-bar-link" href="/equipo">
                Equipo
              </Nav.Link>
              <Nav.Link className="nav-bar-link" href="/login" onClick={logout}>
                Logout
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
