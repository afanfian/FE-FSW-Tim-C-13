/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../views/Layout/navbarbeforelogin'
import Footer from '../views/Layout/footer'
import '../styles/about.css'
import LogoPesawat from '../assets/airplane.svg'
import VisionMision from '../assets/About/img-vision.png'

function about () {
  return (
    <div>
        <div id="about">
            <Container>
                <Navbar />
                {/* Jumbotron */}
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
            </Container>
        </div>
        {/* Navbar */}
        <Container>
            {/* About */}
            <Row>
                <Col className="col-md-12 pt-5 px-md-5">
                    <div className="about border border-2 shadow p-3 mb-5 bg-body rounded">
                      <h3 className="fw-bold">ABOUT</h3>
                      <p className="w-100">C-31 Aeroplane is a place for travel agents to purchase airplane tickets based on website and mobile applications. C-13 Aeroplane was established on November 10 2022, taking into account the problem of the absence of website and mobile applications specifically for purchasing airplane tickets.
                      </p>
                    </div>
                </Col>
            </Row>
            {/* Vision & Mision */}
            <Row className="px-md-5">
                <Col className="mision col-12 mb-5 d-flex flex-column flex-lg-row justify-content-evenly px-md-5">
                    <div className="vision d-flex flex-column">
                        <h3 className="text-green">Vision</h3>
                        <p className="w-100">Becoming a New Innovation in Providing Website and Mobile Application Solutions in Purchasing Airplane Tickets.</p>
                        <h3 className="text-green">Mision</h3>
                        <p className="w-100">New Changes in Innovation for Purchasing Special Aircraft Tickets, Based on the Rapid Development and Spread of Use of Website and Mobile-Based Technologies.</p>
                    </div>
                    <div>
                        <img src={VisionMision} width="250px" className="pr-5"/>
                    </div>
                </Col>
            </Row>
            {/* Our Achievment */}
            <Row>
                <Col className="achievment col-12 px-md-5">
                    <div className="mb-5">
                        <h3 className="text-center fw-bold text-center">OUR ACHIEVEMENT</h3>
                        <div className="d-flex flex-column flex-lg-row justify-content-evenly pt-3">
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">150</h4>
                                <h5 className="text-black text-center">Airport</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">350</h4>
                                <h5 className="text-black text-center">Plane</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">5000</h4>
                                <h5 className="text-black text-center">Travel Transactions</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* Print Tickets */}
            <Row>
                <Col className="px-md-5">
                    <div className="print-ticket text-center text-white shadow p-3 mb-5 rounded">
                      <h3 className="fw-bold">Just Check, Print Your Travel Tickets!</h3>
                      <h5>Let's enjoy your trip using the C13 Airplane, don't forget traveling guys!</h5>
                      <button className="btn-green p-2">Let's Order Tickets</button>
                    </div>
                </Col>
            </Row>
        </Container>
        <div id="footer">
          <Container>
            <Footer />
          </Container>
        </div>
    </div>
  )
}

export default about
