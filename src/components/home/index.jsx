/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Carousel, Button } from "react-bootstrap";
import "./home.css";
import Navbar from "../navbar";
import Footer from "../footer";
import "./styles.css";
import {
  Content1,
  Content2,
  Content3,
  LogoPesawat,
} from "../../assets/index.js";
import { TicketService } from "../../services/ticketService";
import { AirportService } from "../../services/airportService";
import { useNavigate } from "react-router-dom";
import NavigasiLogin from '../navbar/navbarafterlogin';


function home() {
  const [airport, setAirport] = useState([]); //Get
  // const [update, setUpdate] = useState(false) //Update
  const [ticket, setTicket] = useState([]); //Get
  const [formCreate, setFormCreate] = useState([]); //Create
  const Navigate = useNavigate();
  const login = window.localStorage.getItem("isLogged")
  useEffect(() => {
    AirportService.getAirport().then((res) => {
      setAirport(res.data.airports);
    });
    TicketService.getTicket().then((res) => {
      setTicket(res.data.tickets);
    });
  }, []);
  console.log(ticket)
  // Booking Ticket
  const createHandler = async () => {
    TicketService.searchTicket(formCreate).then(
      (res) => {
        // setTicketId(res.data);
        Navigate("/user/search-ticket", {state:{
          ticket: res.data.tickets[0]
        }})
      });
  }

  console.log(typeof login)

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <div id="home">
          {/* <div className="content"> */}
          <Container>
            {login === "true" ? <NavigasiLogin /> : 
            <Navbar />}
            {/* Jumbotron */}
            <Row>
              <Col className="col-md-6">
                <div>
                  <img src={LogoPesawat} width="300px" alt="" />
                </div>
              </Col>
              <Col className="col-md-6 pt-5 pb-3">
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
          {/* </div> */}
        </div>
        <Container id="search-ticket">
          <div className="form py-5 border border-2 shadow p-3 mb-5 bg-body rounded">
          {/* Form Ticket */}
            <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Arrival</Form.Label>
                      <Form.Select aria-label="Default select example"
                          onChange={(e)=> setFormCreate({...formCreate,id_airport: e.target.value})}
                      >
                          <option>Select Airport</option>
                          {airport.map((airport) => (
                              <option value={airport.id} key={airport.id}>
                              {airport.airport_name}
                              </option>
                          ))} 
                      </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Departure Date</Form.Label>
                      <Form.Control
                          value={formCreate.departure_date} 
                          onChange={(e)=> setFormCreate({...formCreate,departure_date: e.target.value})}
                          name='departure_date' 
                          type="date"
                      />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Arrival Date</Form.Label>
                      <Form.Control
                          value={formCreate.arrival_date} 
                          onChange={(e)=> setFormCreate({...formCreate,arrival_date: e.target.value})} 
                          className="form-control" 
                          name='arrival_date' 
                          type="date"
                      />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Class</Form.Label>
                      <Form.Select aria-label="Default select example"
                          onChange={(e)=> setFormCreate({...formCreate,class: e.target.value})}
                      >
                          <option>Select Class</option>
                              <option value='Economy'>
                                  Economy
                              </option>
                              <option value='Business'>
                                  Business
                              </option>
                      </Form.Select>
                  </Form.Group>
                  <Button variant="primary" onClick={createHandler}>
                      Save Changes
                  </Button>
            </Form>
          </div>
          {/* Caraousel */}
          <Row>
            <Carousel
              variant="dark"
              activeIndex={index}
              onSelect={handleSelect}
            >
              <Carousel.Item>
                <Row>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded float-end"
                      src={Content1}
                      alt="First slide"
                    />
                  </Col>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded mx-auto"
                      src={Content2}
                      alt="Second slide"
                    />
                  </Col>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded float-start"
                      src={Content3}
                      alt="Third slide"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded float-end"
                      src={Content1}
                      alt="First slide"
                    />
                  </Col>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded mx-auto"
                      src={Content2}
                      alt="Second slide"
                    />
                  </Col>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded float-start"
                      src={Content3}
                      alt="Third slide"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded float-end"
                      src={Content1}
                      alt="First slide"
                    />
                  </Col>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded mx-auto"
                      src={Content2}
                      alt="Second slide"
                    />
                  </Col>
                  <Col className="col-4 mb-5">
                    <img
                      className="d-block w-75 rounded float-start"
                      src={Content3}
                      alt="Third slide"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Row>
          {/* Promo Ticket */}
          {/* <Row>
      <Col className="col-6">
        <img src={TicketVocation} width="300px" className="mx-auto"/>
      </Col>
      <Col className="col-6">
        <img src={TicketVocation} width="300px" className="mx-auto"/>
      </Col>
    </Row> */}
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default home;
