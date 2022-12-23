import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerActions } from '../../config/redux/actions/authActions';
import { Form, Col, Container, Row } from 'react-bootstrap'
import { account, gambarIcon } from '../../assets/index.js'
import './register.css'

function register() {

  const history = useNavigate();
  const { register, handleSubmit, formState: { errors, dirtyFields, isValid }, getValues } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(registerActions(data, history));
  }

  return (
    <div id="register">
      <Container >
        {/*Use Form*/}
        <Row>
          <Col className="col-md-6 pt-3 border border-2 shadow mb-2 bg-body rounded">
            <div>
              <div id="register-in">
                <div className="d-grid gap-8 justify-content-center">
                  <img src={account} alt="" />
                </div>
                <div className="d-grid gap-8 justify-content-center mt-2">
                  <h3 className="text-green-1">REGISTER</h3>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-5 mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">Firstname</label>
                    <input className={errors.firstname ? 'form-control ps-4 border-danger' : 'form-control ps-4'}
                      type="text"
                      placeholder="Fristname"
                      name='firstname'
                      aria-label=""
                      {...register('firstname', {
                        required: "First Name is Required",
                        maxLength: {
                          value: 15,
                          message: "Name Too Long",
                        }
                      })} />
                    {errors.firstname && <p className="text-danger">{errors.firstname.message}</p>}
                  </div>

                  <div className="mt-3 mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">Lastname</label>
                    <input className={errors.lastname ? 'form-control ps-4 border-danger' : 'form-control ps-4'}
                      type="text"
                      placeholder="Lastname"
                      name='lastname'
                      aria-label=""
                      {...register('lastname', {
                        required: "Last Name is Required",
                        maxLength: {
                          value: 15,
                          message: "Name Too Long",
                        }
                      })} />
                    {errors.lastname && <p className="text-danger">{errors.lastname.message}</p>}
                  </div>

                  <div className="mt-3 mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">Address</label>
                    <input className={errors.address ? 'form-control ps-4 border-danger' : 'form-control ps-4'}
                      type="text"
                      placeholder="Address"
                      name='address'
                      aria-label=""
                      {...register('address', {
                        required: "Address is Required",
                        maxLength: {
                          value: 100,
                          message: "Name Too Long",
                        }
                      })} />
                    {errors.address && <p className="text-danger">{errors.address.message}</p>}
                  </div>

                  <div className="mt-3 mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">Phone</label>
                    <input className={errors.Phone ? 'form-control ps-4 border-danger' : 'form-control ps-4'}
                      type="number"
                      placeholder="Phone"
                      name='phone'
                      aria-label=""
                      {...register('phone', {
                        required: "Phone Number is Required",
                        minLength: {
                          value: 12,
                          message: "Phone Number Too Short",
                        },
                        maxLength: {
                          value: 13,
                          message: "Phone Number Too Long",
                        }
                      })} />
                    {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                  </div>

                  <div className="mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">Email</label>
                    <input className={errors.email ? 'form-control ps-4 border-danger' : 'form-control ps-4'}
                      type="text"
                      placeholder="Enter your Email"
                      name='email'
                      aria-label=""
                      {...register('email', {
                        required: 'Please enter your email',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Please input true email.'
                        }
                      })} />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                  </div>

                  <div className="mt-3 mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">Password</label>
                    <input className={errors.password ? 'form-control ps-4 border-danger' : 'form-control ps-4'}
                      type="password"
                      placeholder="Enter your password"
                      name='password'
                      aria-label=""
                      {...register('password', {
                        required: 'Please enter your password',
                        minLength: {
                          value: 8,
                          message: 'Password Too Short'
                        },
                        maxLength: {
                          value: 18,
                          message: 'Password Too Long'
                        }
                      }
                      )} />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  </div>

                  <div className="mt-3 mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">Confirm Password</label>
                    <input className={errors.ConfirmPassword ? 'form-control ps-4 border-danger' : 'form-control ps-4'}
                      type="password"
                      placeholder="****************************"
                      name='ConfirmPassword'
                      aria-label=""
                      {...register('ConfirmPassword', {
                        required: "Password is Required",
                        minLength: {
                          value: 8,
                          message: "Password Too Short",
                        },
                        maxLength: {
                          value: 18,
                          message: "Password Too Long",
                        },
                        validate: (value) => value === getValues('password') || "Password doesn't match",
                      }
                      )} />
                    {errors.ConfirmPassword && <p className="text-danger">{errors.ConfirmPassword.message}</p>}
                  </div>
                  <div className="d-grid gap-8">
                    <button className={dirtyFields && isValid ? 'button form-control' : 'button form-control opacity-50'} placeholder="Default input" aria-label="default input example" disabled={!dirtyFields || !isValid}>Register</button>
                  </div>
                  <div className="d-grid gap-8 justify-content-center">
                    <p className="mt-4">
                      Dont Have an Account ? <a href="/login">Sign In</a>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col className="col-md-6 pt-5">
            <div>
              <img src={gambarIcon} width="300" className="icon-right" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default register
