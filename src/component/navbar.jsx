import React from 'react'
import logo from '../assets/logo-aerpleno.png'
import notif from '../assets/notif.svg'
import profil from '../assets/profil.svg'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../styles/navbar.css'

const navbar = () => {
  return (
    <div id = 'navbar'>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
          <Nav className=" justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#notification"><img src={notif} /> Notification </Nav.Link>
            <Nav.Link href="#profil"><img src={profil} /> Profil </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default navbar
