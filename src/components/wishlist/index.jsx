import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { TicketService } from "../../services/ticketService";
import { Footer } from "../../components"
import Navbar from '../navbar/navbarafterlogin'
import './wishlist.css'

function wishlist(){
    const {state} = useLocation();
    console.log(state);
    const [ticket, setTicket] = useState([]) //Get
    const dispatch = useDispatch();
    useEffect(()=>{
        TicketService.getTicketId(state.ticket).then((res)=>{
            setTicket(res.data.ticket);
        });
        },[dispatch])

    console.log(ticket.airport)

    return(
        <>
        <div id="wishlist">
            <Navbar />
            <Container>
                <Row>
                    <h3 className="fw-bold text-center">Check your Wishlist!</h3>
                    <Col className="col-md-12 pt-5 px-md-5">
                        <div className="about border border-2 shadow p-3 mb-5 bg-body rounded">
                        <div className="d-flex flex-column flex-lg-row justify-content-evenly pt-3">
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Airport Name</h4>
                                <h5 className="text-black text-center">{ticket.airport_name}</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Airport Location</h4>
                                <h5 className="text-black text-center">{ticket.airport_location}</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Departure Date</h4>
                                <h5 className="text-black text-center">{ticket.departure_date}</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Arrival Date</h4>
                                <h5 className="text-black text-center">{ticket.arrival_date}</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Class</h4>
                                <h5 className="text-black text-center">{ticket.class}</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Price</h4>
                                <h5 className="text-black text-center">{ticket.price}</h5>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}

export default wishlist