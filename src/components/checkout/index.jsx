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
                        <Card className="col-md-6">
                            <Card.Body>
                                <p className="fw-bold text-center">[Checkout]</p>
                                <p className="fw-bold">Name:</p>
                                <p className="">{passenger.passenger_name}</p>
                                <p className="fw-bold">Airport Name:</p>
                                <p className="">{airport.airport_name}</p>
                                <p className="fw-bold">Departure Date:</p>
                                <p className="">{ticket.departure_date}</p>
                                <p className="fw-bold">Price:</p>
                                <p className="">{ticket.price}</p>
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