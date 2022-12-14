/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Container, Row, Col, Form, Carousel } from 'react-bootstrap'
import Navbar from '../views/Layout/navbarbeforelogin'
import Footer from '../views/Layout/footer'
import '../styles/home.css'
import '../styles/styles.css'
import LogoPesawat from '../assets/airplane.svg'
// import iconDeparture from '../assets/Home/airplane-landing.svg'
// import iconCalendar from '../assets/Home/calendar-date.svg'
// import iconArrival from '../assets/Home/airplane-takeoff.svg'
// import iconPasengger from '../assets/Home/person.svg'
// import iconClass from '../assets/Home/sofa-single.svg'
import Content1 from '../assets/Home/content-1.png'
import Content2 from '../assets/Home/content-2.svg'
import Content3 from '../assets/Home/content-3.svg'
// import TicketVocation from '../assets/Home/ticket-vocation.svg'
import { Formik } from 'formik'
import * as Yup from 'yup'

function home () {
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

  // const options = [
  //   { value: 'CGK - Bandar Udara Internasional Soekarno–Hatta' },
  //   { value: 'DPS - Bandar Udara Internasional Ngurah Rai' },
  //   { value: 'SUB - Bandar Udara Internasional Juanda' },
  //   { value: 'BDO - Bandar Udara Internasional Husein Sastranegara' },
  //   { value: 'JOG - Bandar Udara Internasional Adi Sucipto' },
  //   { value: 'SOC - Bandar Udara Internasional Adisumarmo' },
  //   { value: 'SRG - Bandar Udara Internasional Achmad Yani' },
  //   { value: 'MLG - Bandar Udara Abdul Rachman Saleh' },
  //   { value: 'BTJ - Bandar Udara Internasional Hang Nadim' },
  //   { value: 'MES - Bandar Udara Internasional Polonia' },
  //   { value: 'KMU - Bandar Udara Internasional Kuala Namu' },
  //   { value: 'PDG - Bandar Udara Internasional Minangkabau' },
  //   { value: 'LOP - Bandar Udara Internasional Lombok' }
  // ]

  // const passengerValue = [
  //   { value: 'Economy Class' },
  //   { value: 'Business Class' }
  // ]

  // const classValue = [
  //   { value: 'Baby' },
  //   { value: 'Mr' },
  //   { value: 'Mrs' }
  // ]

  // const [departure, setDeparture] = useState('')
  // const [departureDate, setDepartureDate] = useState(new Date())
  // const [passenger, setPassenger] = useState('')
  // const [arrival, setArrival] = useState('')
  // const [arrivalDate, setArrivalDate] = useState(new Date())
  // const [sofa, setSofa] = useState('')

  return (
    <div id="home">
      <Container>
        {/* Navbar */}
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
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group as={Col} md="6" className='mb-3' controlId="departure">
                          <Form.Label>Departure</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Departure"
                            name="departure"
                            value={values.departure}
                            onChange={handleChange}
                            isInvalid={!!errors.departure}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.departure}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className='mb-3' controlId="arrival">
                          <Form.Label>Arrival</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Arrival"
                            name="arrival"
                            value={values.arrival}
                            onChange={handleChange}
                            isInvalid={!!errors.arrival}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.arrival}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className='mb-3' controlId="departure_date">
                          <Form.Label>Departure Date</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Departure Date"
                            name="departure_date"
                            value={values.departure_date}
                            onChange={handleChange}
                            isInvalid={!!errors.departure_date}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.departure_date}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className='mb-3' controlId="arrival_date">
                          <Form.Label>Arrival Date</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Arrival Date"
                            name="arrival_date"
                            value={values.arrival_date}
                            onChange={handleChange}
                            isInvalid={!!errors.arrival_date}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.arrival_date}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className='mb-3' controlId="passenger">
                          <Form.Label>Passenger</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Passenger"
                            name="passenger"
                            value={values.passenger}
                            onChange={handleChange}
                            isInvalid={!!errors.passenger}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.passenger}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className='mb-3' controlId="sofa">
                          <Form.Label>Class</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Class"
                            name="sofa"
                            value={values.sofa}
                            onChange={handleChange}
                            isInvalid={!!errors.sofa}
                          />

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
                          id="validationFormik0"
                        />
                      </Form.Group>
                      <button type="submit" className="btn-green">Submit form</button>
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
        {/* Footer */}
        <Footer />
      </Container>
    </div>
  )
}

export default home
