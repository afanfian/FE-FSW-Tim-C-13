import React from "react";
import { Container, Row } from "react-bootstrap";
import "./booking.css";
import Navbar from "../navbar";
import { DetailPemesan, DetailPenumpang, Services, Bagasi } from "../../assets";

const bookingComponent = () => {
  return (
    <div id="booking" className="">
      <Container>
        <Navbar />
        <Row>
          <div className="">
            <div id="detail-booking">
              <div className='col-5 mt-5 me-5 p-3'>
                <h3>BOOKING</h3>

                {/* Detail Pemesan */}
                <div id="detail-pemesan" className="mb-4">
                  <div className="d-flex p-2">
                    <img src={DetailPemesan} alt="" />
                    <h4> Detail Pemesan </h4>
                  </div>

                  <div id="order" className="ms-5">
                    <select name="Title" id="" className="me-4">
                      <option disable selected>
                        Title
                      </option>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                    </select>
                    <input placeholder="Input your name" />
                    <div id="email" className="mt-2">
                      <input placeholder="Input your email " />
                    </div>
                  </div>
                </div>

                {/* Detail Penumpang */}
                <div id="detail-penumpang" className="mb-4">
                  <div className="d-flex p-2">
                    <img src={DetailPenumpang} alt="" />
                    <h4> Detail Penumpang </h4>
                  </div>

                  <div id="passanger" className="ms-5">
                    <select name="Title" id="" className="me-4">
                      <option disable selected>
                        Title
                      </option>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                    </select>
                    <input placeholder="Input your name" />
                  </div>
                </div>

                {/* Services */}
                <div id="detail-penumpang" className="mb-4">
                  <div className="d-flex p-2">
                    <img src={Services} alt="" />
                    <h4> Layanan Ekstra </h4>
                  </div>

                  <div id="bagasi" >
                    <div id="logo-bagasi" className="d-flex">
                    <img src={Bagasi} alt="" />
                    <h6>Bagasi</h6>
                    </div>

                    <div id="ket-bagasi">
                    <p>Maximum bagasi sebanyak 20 kg</p>
                    </div>
                  </div>
                </div>

                <div id="button" className="d-flex justify-content-end"> 
                <button className="btn btn-primary">Lakukan pemesanan</button>
                </div>
              </div>
            </div>

            <div id="detail-flight" className='col-5 mt-5 me-5 p-3'>
            
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default bookingComponent;
