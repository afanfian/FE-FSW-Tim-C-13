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
                    <p>Waktu Keberangkatan : {ticket.departure_date.split("T")[0]}</p>
                  </div>
                </div>
                <hr />
                <div className="ps-2">
                    <p>Pagi-pagi jalan-jalan</p>
                    <p>Malamnya makan tempe</p>
                    <p>Jangan lupa liburan</p>
                    <p>Bersama C-13 Aeroplane</p>
                </div>
                <hr />
                {/* Harga Tiket */}
                <div id="ticket-price" className="col-auto ps-2 d-flex align-items-center">
                    <h4>Price :  {ticket.price}</h4>
                  
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
                  <h4 className="text-green"> Order Details </h4>
                </div>

                <div id="order" className="ms-5">
                  <h5>Air Name : <span className="text-green">{airport.airport_name}</span></h5>
                  <h5>Air Location : <span className="text-green">{airport.airport_location}</span></h5>
                  <h5>Departure Date : <span className="text-green">{ticket.departure_date.split("T")[0]}</span></h5>
                  <h5>Arrival Date : <span className="text-green">{ticket.arrival_date.split("T")[0]}</span></h5>
                </div>
              </div>

              {/* Detail Penumpang */}
              <div id="detail-penumpang" className="mb-4">
                <div className="d-flex p-2">
                  <img src={DetailPenumpang} alt="Detail Penumpang" />
                  <h4 className="text-green"> Passenger Details </h4>
                </div>

                <div id="passanger" className="ms-5">
                  <div name="Title" id="" className="me-4 mt-2">
                    <h5>Pasenger Name : <span className="text-green">{passenger.passenger_name}</span></h5>
                    <h5>ID Number : <span className="text-green">{passenger.nik}</span></h5>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div id="detail-penumpang" className="mb-4">
                <div className="d-flex p-2">
                  <img src={Services} alt="Services" />
                  <h4 className="text-green"> Extra Services </h4>
                </div>

                <div id="bagasi">
                  <div id="logo-bagasi" className="d-flex">
                    <img src={Bagasi} alt="Bagasi " />
                    <h6>Baggage</h6>
                  </div>

                  <div id="ket-bagasi">
                    <p>Maximum baggage is 20 kg</p>
                  </div>
                </div>
              </div>
              <div id="button" className="d-flex justify-content-end">
                <button className="btn-checkout" onClick={createHandler}>Checkout</button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default bookingComponent;
