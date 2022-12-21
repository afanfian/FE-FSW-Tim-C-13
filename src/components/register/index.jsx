import React from 'react'
import { Form, Col, Container, Row } from 'react-bootstrap'
import { account, gambarIcon } from '../../assets/index.js'
import './register.css'
import { Formik } from 'formik'
import * as Yup from 'yup'

function register () {
  const schema = Yup.object().shape({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string().required('Phone is required'),
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string().required('Confirm Password is required')
  })

  return (
    <div id="register">
      <Container >
        {/* Formik */}
        <Row>
            <Col className="col-md-6 pt-5 border border-2 shadow p-3 mb-5 bg-body rounded">
                <img src={account} className="icon-right" alt=""/>
                <h1 className="text-green-1 pb-3 text-center">REGISTER</h1>
                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                      firstname: '',
                      lastname: '',
                      address: '',
                      phone: '',
                      password: '',
                      confirm_password: '',
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
                        <Form.Group className='mb-3' controlId="firstname">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Firstname"
                            name="firstname"
                            value={values.firstname}
                            onChange={handleChange}
                            isInvalid={!!errors.firstname}
                            />
                            <Form.Control.Feedback type="invalid">
                            {errors.firstname}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="lastname">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Lastname"
                            name="lastname"
                            value={values.lastname}
                            onChange={handleChange}
                            isInvalid={!!errors.lastname}
                            />
                            <Form.Control.Feedback type="invalid">
                            {errors.lastname}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            isInvalid={!!errors.address}
                            />
                            <Form.Control.Feedback type="invalid">
                            {errors.address}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            isInvalid={!!errors.phone}
                            />
                            <Form.Control.Feedback type="invalid">
                            {errors.phone}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                            {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="confirm_password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Confirm Password"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            isInvalid={!!errors.confirm_password}
                            />
                            <Form.Control.Feedback type="invalid">
                            {errors.confirm_password}
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
                        <p className="text-center py-3">Already Have an Account? <a href="/login">Sign In</a> </p>
                    </Form>
                    )}
                </Formik>
            </Col>
            <Col className="col-md-6 pt-5">
                <div>
                    <img src={gambarIcon} width="300" className="icon-right" alt=""/>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
export default register
