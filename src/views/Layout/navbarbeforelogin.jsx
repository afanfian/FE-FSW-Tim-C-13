/* eslint-disable react/react-in-jsx-scope */
// import Button from 'react-bootstrap/Button'
import React from 'react'
import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap'
import '../../styles/layout/navbarbeforelogin.css'
import Logo from '../../assets/logo-pesawat.svg'

function OffcanvasExample () {
  return (
    <Container >
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo} className="logo-navbar"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={Logo} className="logo-navbar" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home" className="pt-3">Home</Nav.Link>
                  <Nav.Link href="/about" className="pt-3">About</Nav.Link>
                  <Nav.Link href="/login"><Button variant="primary">Login</Button></Nav.Link>
                  <Nav.Link href="#registration"><Button variant="primary">Registration</Button></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Container>
  )
}

export default OffcanvasExample
