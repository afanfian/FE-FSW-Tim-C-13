import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { Footer } from "../../components"
import { useDispatch } from 'react-redux';
import Navbar from '../navbar/navbarafterlogin'
import './ticketPromo.css'
import { TicketService } from "../../services/ticketService";
import { useNavigate } from "react-router-dom";


function wishlist(){

    const [ticket, setTicket] = useState([]) //Get
    const history = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
    TicketService.getTicket().then((res)=>{
        setTicket(res.data.tickets);
    });
    },[dispatch])

    // console.log(ticket)

    const addWishlist = (id, departure_date, arrival_date) =>{
        history("/user/wishlist", {
            state: {
                ticket: id, departure_date, arrival_date
            }
        })
    }
    // let i = 1;
    return(
        <>
        <div id="ticketPromo">
            <Navbar />
            <Container>
                <Row>
                    <h3 className="fw-bold text-center">Flight promo tickets at <span className="text-green">C13-AEROPLANE !</span></h3>
                    <Col className="col-md-12 pt-5 px-md-5">
                        {ticket.map((ticket)=>{
                            return(
                            <>
                        <div className="about border border-2 shadow p-3 mb-5 bg-body rounded">
                            <div className="d-flex flex-column flex-lg-row justify-content-evenly pt-3">
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Airport Name</h4>
                                    <h5 className="text-black text-left">{ticket.airport.airport_name}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Airport Location</h4>
                                    <h5 className="text-black text-left">{ticket.airport.airport_location}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Departure Date</h4>
                                    <h5 className="text-black text-center">{ticket.departure_date.split("T")[0]}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Arrival Date</h4>
                                    <h5 className="text-black text-center">{ticket.arrival_date.split("T")[0]}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Class</h4>
                                    <h5 className="text-black text-center">{ticket.class}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Price</h4>
                                    <h5 className="text-black text-center">{ticket.price}</h5>
                                </div>
                                <button type="submit" className="btn-navbar" onClick={()=>addWishlist(ticket.airport.id, ticket.departure_date, ticket.arrival_date)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                </button>
                            </div>
                        </div>
                        </>
                            )
                        })}
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