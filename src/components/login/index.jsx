/* eslint-disable react/prop-types */
import React from "react";
import { Form, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { account, gambarIcon } from "../../assets/index.js";
import Navbar from "../navbar";
import { useDispatch } from "react-redux";
import {
  loginActions,
  verifyAccountActions,
} from "../../config/redux/actions/authActions";

function LoginComponent(props) {
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(loginActions(data, history));
  };

  // Verify Account From Email
  if (props.tokenVerify) {
    const token = { urlToken: props.tokenVerify };
    dispatch(verifyAccountActions(token, history));
  }

  return (
    <div id="masuk">
      <Container>
        <Navbar />
        <Row>
          <Col className="col-md-6 pt-3 border border-2 shadow mb-2 bg-body rounded">
            <div id="login">
              <div id="sign-in">
                <div className="d-grid gap-8 justify-content-center">
                  <img src={account} alt="" />
                </div>
                <div className="d-grid gap-8 justify-content-center mt-2">
                  <h3>LOGIN</h3>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-5 mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">
                      Email
                    </label>
                    <input
                      className={
                        errors.email
                          ? "form-control ps-4 border-danger"
                          : "form-control ps-4"
                      }
                      type="text"
                      placeholder="Enter your Email"
                      name="email"
                      aria-label=""
                      {...register("email", {
                        required: "Please enter your email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Please input true email.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="mt-3 mb-3 shadow-sm">
                    <label htmlFor="" className="mb-2">
                      Password
                    </label>
                    <input
                      className={
                        errors.password
                          ? "form-control ps-4 border-danger"
                          : "form-control ps-4"
                      }
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      aria-label=""
                      {...register("password", {
                        required: "Please enter your password",
                        minLength: {
                          value: 8,
                          message: "Password Too Short",
                        },
                        maxLength: {
                          value: 18,
                          message: "Password Too Long",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="d-grid gap-8">
                    <button
                      className={
                        isDirty && isValid
                          ? "button form-control"
                          : "button form-control opacity-50"
                      }
                      placeholder="Default input"
                      aria-label="default input example"
                      disabled={!isDirty || !isValid}
                    >
                      Sign-in
                    </button>
                  </div>
                  <div className="d-grid gap-8 justify-content-center">
                    <p className="mt-4">
                      Dont Have an Account ? <a href="/register">Sign up</a>
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
  );
};
export default LoginComponent;
