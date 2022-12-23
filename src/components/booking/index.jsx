import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./booking.css";
import Navbar from "../navbar";

const bookingComponent = () => {
  return (
    <div id="booking" className="">
      <Container>
        <Row>
          <Navbar />
          <div className="justify-content-center ">
            <Col id="detail-booking" className="col-5 mt-5  me-5">
              <p>Hello</p>
            </Col>

            <Col id="detail-booking" className="col-4 mt-5 ">
              <p>World</p>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default bookingComponent;
