import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { Footer } from "../../components"
// import { useDispatch } from 'react-redux';
import Navbar from '../navbar/navbarafterlogin'
import './history.css'
import { BookingService } from "../../services/bookingService";


function history(){

    // const [ticket, setTicket] = useState([]) //Get
    const [history, setHistory] = useState([])
    // const dispatch = useDispatch();

    useEffect(()=>{
    BookingService.getBookingUser().then((res)=>{
        setHistory(res.data.bookings);
    });
    },[])

    console.log(history)

    // let i = 1;
    return(
        <>
        <div id="history">
            <Navbar />
            <Container>
                <Row>
                    <h3 className="fw-bold text-center">Check your history transaction!</h3>
                    <Col className="col-md-12 pt-5 px-md-5">
                        {history.map((history)=>{
                            return(
                            <>
                        <div className="about border border-2 shadow p-3 mb-5 bg-body rounded">
                            <div className="d-flex flex-column flex-lg-row justify-content-evenly pt-3">
                                {/* <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Airport Name</h4>
                                    <h5 className="text-black text-left">{history.ticket.airport.airport_name}</h5>
                                </div> */}
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Username</h4>
                                    <h5 className="text-black text-left">{history.User.username}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Email</h4>
                                    <h5 className="text-black text-left">{history.User.email}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Phone Number</h4>
                                    <h5 className="text-black text-left">{history.User.phone_number}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Class</h4>
                                    <h5 className="text-black text-left">{history.ticket.class}</h5>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Price</h4>
                                    <h5 className="text-black text-left">{history.ticket.price}</h5>
                                </div>
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

export default history