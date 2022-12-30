import React from "react"
import {Container, Row, Card} from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import { Footer } from "../../components"
import Navbar from '../navbar/navbarafterlogin'
import './checkout.css'

function checkout (){
    const {state} = useLocation();
    const ticket = state.ticket;
    const airport = state.airport;
    const passenger = state.passenger;

    console.log(state)
    return(
        <>
            <div id="checkout">
                <Navbar />
                <Container>
                    <Row className="justify-content-center m-auto py-5">
                        <div className="text-center pb-5">
                            <h3 className="fw-bold pb-2">Thank You for Your Order on <span className="text-green">C-13 AEROPLANE</span> !</h3>
                            <h3>Good Luck on Your Flight <span className="text-green">{passenger.passenger_name}</span></h3>
                        </div>
                        <Card id="#card-bg" className="col-md-6">
                            <Card.Body>
                                <p className="fw-bold text-center h4">[Your Flight Ticket]</p>
                                <p className="fw-bold h5">Name :</p>
                                <p className="h6">{passenger.passenger_name}</p>
                                <p className="fw-bold h5">ID Number :</p>
                                <p className="h6">{passenger.nik}</p>
                                <p className="fw-bold h5">Airport Name :</p>
                                <p className="h6">{airport.airport_name}</p>
                                <p className="fw-bold h5">Departure Date :</p>
                                <p className="h6">{ticket.departure_date.split("T")[0]}</p>
                                <p className="fw-bold h5">Price:</p>
                                <p className="h6">{ticket.price}</p>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default checkout