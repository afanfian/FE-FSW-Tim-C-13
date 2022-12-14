/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../views/Layout/navbarbeforelogin'
import Footer from '../views/Layout/footer'
import LogoPesawat from '../assets/airplane.svg'

function about () {
  return (
    <div id="about">
        <Container>
            {/* Navbar */}
            <Navbar />
            {/* About */}
            <Row>
                <Col className="col-md-6">
                    <div>
                    <img src={LogoPesawat} width="300px" />
                    </div>
                </Col>
                <Col className="col-md-6 pt-5">
                    <div className="text-center">
                    <p className="fw-bold h1">
                        Confused about where to find plane tickets?
                    </p>
                    <p className="text-green fw-bold h2">On C-13 AEROPLANE</p>
                    <p className="fw-bold h3">Only!</p>
                    <button className="btn-green">Let's Order Tickets</button>
                    </div>
                </Col>
            </Row>
            {/* Footer */}
            <Footer />
        </Container>
    </div>
  )
}

export default about
