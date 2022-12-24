import React from "react";
import { Container, Row } from "react-bootstrap";
import "./booking.css";
import Navbar from '../navbar/navbarafterlogin'
import {
  DetailPemesan,
  DetailPenumpang,
  Services,
  Bagasi,
  ArrowLongRight,
} from "../../assets";

function bookingComponent() {
  return (
    <>
      <Navbar />
      <div id="booking" className="">
        <Container>
          <Row className="p-5">
            {/* Detail penerbangan */}
            <div id="detail-flight" class="col p-3 me-3 mb-3">
              <h4>PENERBANGAN</h4>

              <div>
                {/* Airport Location */}
                <div id="location" className="d-flex">
                  <div id="departure-place" className="col-auto ps-2">
                    <p>Medan</p>
                    <p>(KNO)</p>
                  </div>
                  <div className="col-auto p-2">
                    <img src={ArrowLongRight} />
                  </div>
                  <div id="destination-place" className="col-auto ps-2">
                    <p>Jakarta </p>
                    <p>(CGK) </p>
                  </div>
                </div>

                {/* Waktu berangkat */}
                <div id="time" className="">
                  <div id="departure-time" className="col-auto ps-2 d-flex">
                    <p>Waktu Keberangkatan :  </p>
                    <p>15.00</p>
                  </div>
                </div>
                <hr />
                {/* Harga Tiket */}
                <div id="ticket-price" className="col-auto ps-2 d-flex align-items-center">
                    <h4>Price :  IDR  896.000</h4>
                  
                </div>


              </div>
            </div>

            {/*  Detail Booking */}
            <div id="detail-booking" class="col p-3 me-3 ">
              <h3>BOOKING</h3>

              {/* Detail Pemesan */}
              <div id="detail-pemesan" className="mb-4">
                <div className="d-flex p-2">
                  <img src={DetailPemesan} alt="" />
                  <h4> Detail Pemesan </h4>
                </div>

                <div id="order" className="ms-5">
                  <select name="Title" id="" className="me-4 mt-2">
                    <option disable selected>
                      Title
                    </option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                  <input placeholder="Input your name" className="mt-2" />
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
                  <select name="Title" id="" className="me-4 mt-2">
                    <option disable selected>
                      Title
                    </option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                  <input placeholder="Input your name" className="mt-2" />
                </div>
              </div>

              {/* Services */}
              <div id="detail-penumpang" className="mb-4">
                <div className="d-flex p-2">
                  <img src={Services} alt="" />
                  <h4> Layanan Ekstra </h4>
                </div>

                <div id="bagasi">
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
          </Row>
        </Container>
      </div>
    </>
  );
}

export default bookingComponent;
