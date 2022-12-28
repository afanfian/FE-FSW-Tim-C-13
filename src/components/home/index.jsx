/* eslint-disable react/no-unescaped-entities */
import React, { useState,useEffect } from 'react'
import { Container, Row, Col, Form, Carousel } from 'react-bootstrap'
import './home.css'
import Navbar from '../navbar'
import Footer from '../footer'
import './styles.css'
import {
  Content1,
  Content2,
  Content3,
  LogoPesawat
} from '../../assets/index.js'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TicketService } from "../../services/ticketService";
import { AirportService } from "../../services/airportService";

function home () {
  const [airport, setAirport] = useState([]) //Get
   const [setTicket] = useState([]) //Get
    useEffect(()=>{
        AirportService.getAirport().then((res)=>{
            setAirport(res.data.airports);
        });
         TicketService.getTicket().then((res)=>{
            setTicket(res.data.tickets);
        });
    },[])
    
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const schema = Yup.object().shape({
    departure: Yup.string().required('Departure is required'),
    departure_date: Yup.string().required('Departure Date is required'),
    passenger: Yup.string().required('Pasengger is required'),
    arrival: Yup.string().required('Arrival is required'),
    arrival_date: Yup.string().required('Arrival Date is required'),
    sofa: Yup.string().required('Class is required'),
    terms: Yup.bool().required().oneOf([true], 'Terms must be accepted')
  })

  return (
    <><div>
      {/* Navbar */}
      <div id="home">
        {/* <div className="content"> */}
        <Container>
          <Navbar />
          {/* Jumbotron */}
          <Row>
            <Col className="col-md-6">
              <div>
                <img src={LogoPesawat} width="300px" alt="" />
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
        {/* </div> */}
      </div>
      <Container>

        {/* Form Ticket */}
        <Row className="pt-5">
          <Col className="col-md-12 w-100 search-flight shadow p-3 mb-5 bg-body rounded">
            <Row>
              <Col>
                <Formik
                  validationSchema={schema}
                  onSubmit={console.log}
                  initialValues={{
                    departure: '',
                    departure_date: '',
                    arrival: '',
                    arrival_date: '',
                    passenger: '',
                    sofa: '',
                    terms: false
                  }}
                >
                  {({
                    handleSubmit, handleChange, handleBlur, values, touched, isValid, errors
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="6"
                          className="mb-3"
                          controlId="departure"
                        >
                          {/* Airport Departure */}
                          <Form.Label>Departure</Form.Label>
                          <Form.Select
                            type="text"
                            name="departure"
                            value={values.departure}
                            onChange={handleChange}
                            isInvalid={!!errors.departure} >
                            <option>Select Airport</option>
                            {airport.map((airport) => (
                            <option value={airport.id} key={airport.id}>
                            {airport.airport_name}
                            </option>
                        ))} 
                            </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.departure}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="6"
                          className="mb-3"
                          controlId="arrival"
                        >

                        {/* Airport Arrival */}
                          <Form.Label>Arrival</Form.Label>
                          <Form.Select
                            type="text"
                            name="departure"
                            value={values.departure}
                            onChange={handleChange}
                            isInvalid={!!errors.departure} >
                            <option>Select Airport</option>
                            {airport.map((airport) => (
                            <option value={airport.id} key={airport.id}>
                            {airport.airport_name}
                            </option>
                        ))} 
                            </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.arrival}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="6"
                          className="mb-3"
                          controlId="departure_date"
                        >
                          <Form.Label>Departure Date</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Departure Date"
                            name="departure_date"
                            value={values.departure_date}
                            onChange={handleChange}
                            isInvalid={!!errors.departure_date} />
                          <Form.Control.Feedback type="invalid">
                            {errors.departure_date}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="6"
                          className="mb-3"
                          controlId="arrival_date"
                        >
                          <Form.Label>Arrival Date</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Arrival Date"
                            name="arrival_date"
                            value={values.arrival_date}
                            onChange={handleChange}
                            isInvalid={!!errors.arrival_date} />
                          <Form.Control.Feedback type="invalid">
                            {errors.arrival_date}
                          </Form.Control.Feedback>
                        </Form.Group>
                        {/* <Form.Group
                          as={Col}
                          md="6"
                          className="mb-3"
                          controlId="passenger"
                        >
                          <Form.Label>Passenger</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Passenger"
                            name="passenger"
                            value={values.passenger}
                            onChange={handleChange}
                            isInvalid={!!errors.passenger} />
                          <Form.Control.Feedback type="invalid">
                            {errors.passenger}
                          </Form.Control.Feedback>
                        </Form.Group> */}
                        <Form.Group
                          as={Col}
                          md="6"
                          className="mb-3"
                          controlId="sofa"
                        >
                        {/* Class */}
                          <Form.Label>Class</Form.Label>
                          <Form.Select
                            type="text"
                            placeholder="Class"
                            name="sofa"
                            value={values.sofa}
                            onChange={handleChange}
                            isInvalid={!!errors.sofa}>
                            <option selected>Choose Class</option>
                            <option value="Economy Class">Economy Class</option>
                            <option value="Business Class">Business Class</option>
                            <option value="First Class">First Class</option>
                          </Form.Select>

                          <Form.Control.Feedback type="invalid">
                            {errors.sofa}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Form.Group className="mb-3">
                        <Form.Check
                          required
                          name="terms"
                          label="Agree to terms and conditions"
                          onChange={handleChange}
                          isInvalid={!!errors.terms}
                          feedback={errors.terms}
                          feedbackType="invalid"
                          id="validationFormik0" />
                      </Form.Group>
                      <button type="submit" className="btn-green">
                        Booking Ticket
                      </button>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Caraousel */}
        <Row>
          <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Row>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded float-end"
                    src={Content1}
                    alt="First slide" />
                </Col>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded mx-auto"
                    src={Content2}
                    alt="Second slide" />
                </Col>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded float-start"
                    src={Content3}
                    alt="Third slide" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded float-end"
                    src={Content1}
                    alt="First slide" />
                </Col>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded mx-auto"
                    src={Content2}
                    alt="Second slide" />
                </Col>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded float-start"
                    src={Content3}
                    alt="Third slide" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded float-end"
                    src={Content1}
                    alt="First slide" />
                </Col>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded mx-auto"
                    src={Content2}
                    alt="Second slide" />
                </Col>
                <Col className="col-4 mb-5">
                  <img
                    className="d-block w-75 rounded float-start"
                    src={Content3}
                    alt="Third slide" />
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
    </div><div>
        <Footer />
      </div></>
  )
}

export default home