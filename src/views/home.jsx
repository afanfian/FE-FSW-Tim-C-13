import React, { useState } from 'react'
import { Container, Row, Col, Form, InputGroup, Stack } from 'react-bootstrap'
import Navbar from './Layout/navbarbeforelogin.jsx'
import '../styles/home.css'
import LogoPesawat from '../assets/airplane.svg'
import Takeoff from '../assets/home/airplane-takeoff.svg'
import Arrival from '../assets/home/airplane-landing.svg'
import Calendar from '../assets/home/calendar-date.svg'
import Passenger from '../assets/home/person.svg'
import Class from '../assets/home/sofa-single.svg'
import { Formik } from 'formik'
import * as Yup from 'yup'

function about () {
  const [date, setDate] = useState(new Date())

  const schema = Yup.object().shape({
    departure: Yup.string().required(),
    departure_date: Yup.string().required(),
    passenger: Yup.string().required(),
    arirval: Yup.string().required(),
    arirval_date: Yup.string().required(),
    class: Yup.string().required()
  })

  return (
    <Container>
      <Navbar/>
      {/* About */}
      <Row>
        <Col className="col-md-6">
          <div>
            <img src={LogoPesawat} width="300px" />
          </div>
        </Col>
        <Col className="col-md-6 pt-5">
          <div className="text-center">
            <p className="fw-bold h1">Bingung mau nyari tiket pesawat dimana? </p>
            <p className="text-green fw-bold h2">Di C-13 AEROPLANE</p>
            <p className="fw-bold h3">Aja!</p>
            <button className="btn-green">Yuk Pesan Ticket</button>
          </div>
        </Col>
      </Row>
      {/* Form Ticket */}
      <Row className="pt-5">
        <Col className="col-md-12 w-100 search-flight shadow p-3 mb-5 bg-body rounded">
          <Row className="form-1">
            <Col className="col-md-5 ps-5">
              <p className="fw-bold">SEARCH FLIGHT</p>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  departure: '',
                  departure_date: '',
                  passenger: ''
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
                  <Form.Group controlId="departure" className="mb-3 w-50">
                    <img src={Takeoff} alt="takeoof" className="pe-3 pb-2" />
                    <Form.Label column sm="2">Departure</Form.Label>
                      <InputGroup>
                        <Stack gap={1}>
                          <Form.Control
                            sm="10"
                            type="text"
                            name="departure"
                            value={values.departure}
                            onChange={handleChange}
                            isValid={touched.departure && !errors.departure}
                          />
                        </Stack>
                      </InputGroup>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="departure_date" className="mb-3 w-50">
                    <img src={Calendar} alt="Calendar" className="pe-3 pb-2" />
                    <Form.Label>Departure Date</Form.Label>
                    <InputGroup>
                      <Stack gap={1}>
                      <Form.Control
                        type="date"
                        name="departure_date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        isValid={touched.departure_date && !errors.departure_date}
                      />
                      </Stack>
                    </InputGroup>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="passenger" className="mb-3 w-50">
                  <img src={Passenger} alt="Passenger" className="pe-3 pb-2" />
                  <Form.Label>Passenger</Form.Label>
                    <InputGroup>
                      <Stack gap={1}>
                      <Form.Control
                        type="text"
                        name="passenger"
                        value={values.passenger}
                        onChange={handleChange}
                        isValid={touched.passenger && !errors.passenger}
                      />
                      </Stack>
                    </InputGroup>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form>
                )}
              </Formik>
            </Col>
            <Col className="col-md-5 ps-5 pt-5">
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  arirval: '',
                  arirval_date: '',
                  class: ''
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
                <Form noValidate onSubmit={handleSubmit} className="ps-5">
                  <Form.Group controlId="arrival" className="mb-3 w-50">
                    <img src={Arrival} alt="Arrival" className="pe-3 pb-2" />
                    <Form.Label>Arrival</Form.Label>
                      <InputGroup>
                        <Stack gap={1}>
                          <Form.Control
                            type="text"
                            name="arrival"
                            value={values.arrival}
                            onChange={handleChange}
                            isValid={touched.arrival && !errors.arrival}
                          />
                        </Stack>
                      </InputGroup>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="Arrival_date" className="mb-3 w-50">
                    <img src={Calendar} alt="Calendar" className="pe-3 pb-2" />
                    <Form.Label>Arrival Date</Form.Label>
                      <InputGroup>
                        <Stack gap={1}>
                        <Form.Control
                          type="date"
                          name="Arrival_date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          isValid={touched.Arrival_date && !errors.Arrival_date}
                        />
                        </Stack>
                      </InputGroup>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="Class" className="mb-3 w-50">
                   <img src={Class} alt="Class" className="pe-3 pb-2" />
                    <Form.Label>Class</Form.Label>
                      <InputGroup>
                        <Stack gap={1}>
                        <Form.Control
                          type="text"
                          name="Class"
                          value={values.Class}
                          onChange={handleChange}
                          isValid={touched.Class && !errors.Class}
                        />
                        </Stack>
                      </InputGroup>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <button type="submit" className="btn-green">Submit form</button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default about
