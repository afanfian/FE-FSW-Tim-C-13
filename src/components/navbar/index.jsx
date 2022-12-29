/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line
// import Button from 'react-bootstrap/Button'
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./navbar.css";
import { LogoPesawatNavbar } from "../../assets/index.js";

function navbarBeforeLogin() {
  // console.log(login)
  return (
    <div>
      <Container>
        {["sm"].map((expand) => (
          <Navbar key={expand} expand={expand} className="navbar mb-3">
            <Container fluid>
              <Navbar.Brand href="#">
                <img src={LogoPesawatNavbar} className="logo-navbar" alt="" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img
                      src={LogoPesawatNavbar}
                      className="logo-navbar"
                      alt=""
                    ></img>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/" className="pt-3 text-black fw-bold">
                      Home
                    </Nav.Link>
                    <Nav.Link href="/about" className="pt-3 text-black fw-bold">
                      About
                    </Nav.Link>
                      <Nav.Link href="/login">
                        <button className="btn-navbar fw-bold">Login</button>
                      </Nav.Link>
                      <Nav.Link href="/register">
                        <button className="btn-navbar fw-bold">
                          Registration
                        </button>
                      </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </Container>
    </div>
  );
}

export default navbarBeforeLogin;
