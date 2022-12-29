import React, {useState} from "react"
import { Container, Row } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom";
import { BookingService } from "../../services/bookingService";
import "./booking.css"
import Navbar from '../navbar/navbarafterlogin'
import {
  DetailPemesan,
  DetailPenumpang,
  Services,
  Bagasi,
} from "../../assets";
import SweatAlert from "../../config/sweatAlert";

function bookingComponent() {
  const [alert, setAlert]= useState(false)
  const {state} = useLocation();
  const ticket = state.ticket;
  const airport = state.airport;
  const passenger = state.passenger.newPassenger;
  const Navigate = useNavigate();


  const createHandler = async () => {
  const formCreate = {
    id_passenger: passenger.id,
    id_ticket: ticket.id,
    total_booking: 1
  }
  BookingService.createBooking(formCreate).then(
      (res) => {
        setAlert(true)
          Navigate("/user/checkout", {state:{
            ticket,
            airport, 
            passenger,
        }})
      });
  }
  
  return (
    <>
      <Navbar />
      <div id="booking" className="">
        <Container>
          {alert &&  SweatAlert(String("boking success"), 'success')}
          <Row className="p-5">
            {/* Detail penerbangan */}
            <div id="detail-flight" class="col p-3 me-3 mb-3">
              {/* <h4>PENERBANGAN</h4> */}

              <div>
                {/* Airport Location */}
                {/* <div id="location" className="d-flex">
                  <div id="departure-place" className="col-auto ps-2">
                    <p>Medan</p>
                    <p>(KNO)</p>
                  </div>
                  <div className="col-auto p-2">
                    <img src={ArrowLongRight} alt="arrowlongright" />
                  </div>
                  <div id="destination-place" className="col-auto ps-2">
                    <p>Jakarta </p>
                    <p>(CGK) </p>
                  </div>
                </div> */}

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
                  <img src={DetailPemesan} alt="Detail Pemasanan" />
                  <h4> Detail Pemesan </h4>
                </div>

                <div id="order" className="ms-5">
                  <h4>Air Name:</h4>
                  <h5>{airport.airport_name}</h5>
                  <h4>Air Location:</h4>
                  <h5>{airport.airport_location}</h5>
                  <h4>Departure Date:</h4>
                  <h5>{ticket.departure_date}</h5>
                  <h4>Arrival Date:</h4>
                  <h5>{ticket.arrival_date}</h5>
                </div>
              </div>

              {/* Detail Penumpang */}
              <div id="detail-penumpang" className="mb-4">
                <div className="d-flex p-2">
                  <img src={DetailPenumpang} alt="Detail Penumpang" />
                  <h4> Detail Penumpang </h4>
                </div>

                <div id="passanger" className="ms-5">
                  <div name="Title" id="" className="me-4 mt-2">
                    <h4>Pasenger Name:</h4>
                    <h5>{passenger.passenger_name}</h5>
                    <h4>ID Number:</h4>
                    <h5>{passenger.nik}</h5>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div id="detail-penumpang" className="mb-4">
                <div className="d-flex p-2">
                  <img src={Services} alt="Services" />
                  <h4> Layanan Ekstra </h4>
                </div>

                <div id="bagasi">
                  <div id="logo-bagasi" className="d-flex">
                    <img src={Bagasi} alt="Bagasi " />
                    <h6>Bagasi</h6>
                  </div>

                  <div id="ket-bagasi">
                    <p>Maximum bagasi sebanyak 20 kg</p>
                  </div>
                </div>
              </div>
              <div id="button" className="d-flex justify-content-end">
                <button className="btn btn-primary" onClick={createHandler}>Lakukan pemesanan</button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default bookingComponent;
