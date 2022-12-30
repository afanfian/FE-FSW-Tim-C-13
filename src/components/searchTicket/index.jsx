import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Footer } from "../../components"
import Navbar from '../navbar/navbarafterlogin'
import './searchTicket.css'
import { PassengerService } from "../../services/passangerService";
import { useNavigate, useLocation } from "react-router-dom";


function searchTicket(){
    const {state} = useLocation();
    const ticket = state.ticket;
    const airport = state.ticket.airport;
    const [formCreate, setFormCreate] = useState([]); //Create
    const Navigate = useNavigate();

    const createHandler = async () => {
    PassengerService.createPassenger(formCreate).then(
            (res) => {
                Navigate("/user/booking", {state:{
                    ticket: ticket,
                    airport: airport,
                    passenger: res.data
            }})
        });
    }

    return(
        <>
        <div id="searchTicket">
            <Navbar />
            <Container>
                <Row>
                    <h3 className="fw-bold text-center">Enter passenger data correctly!</h3>
                    <Col className="col-md-12 pt-5 px-md-5">
                        <div className="about border border-2 shadow p-3 mb-5 bg-body rounded">
                            <div className="d-flex flex-column flex-lg-row justify-content-evenly pt-3">
                                <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Airport Name</h4>
                                    <h5 className="text-black text-left">{airport.airport_name}</h5>
                                    <h4 className="text-green text-center">Airport Location</h4>
                                    <h5 className="text-black text-left">{airport.airport_location}</h5>
                                    <h4 className="text-green text-center">Departure Date</h4>
                                    <h5 className="text-black text-center">{ticket.departure_date.split("T")[0]}</h5>
                                    <h4 className="text-green text-center">Arrival Date</h4>
                                    <h5 className="text-black text-center">{ticket.arrival_date.split("T")[0]}</h5>
                                    <h4 className="text-green text-center">Class</h4>
                                    <h5 className="text-black text-center">{ticket.class}</h5>
                                    <h4 className="text-green text-center">Price</h4>
                                    <h5 className="text-black text-center">{ticket.price}</h5>
                                </div>
                                {/* <div className="d-flex flex-column">
                                    <h4 className="text-green text-center">Airport Location</h4>
                                    <h5 className="text-black text-left">{airport.airport_location}</h5>
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
                                </div> */}
                                {/* <button type="submit" className="btn-navbar" onClick={()=>addWishlist(ticket.airport.id, ticket.departure_date, ticket.arrival_date)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                </button> */}
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="text-green h4">Pasangger Name</Form.Label>
                                    <Form.Control
                                        value={formCreate.passenger_name} 
                                        onChange={(e)=> setFormCreate({...formCreate,passenger_name: e.target.value})}
                                        name='passenger_name' 
                                        type="text"
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="text-green h4">ID Number</Form.Label>
                                        <Form.Control
                                            value={formCreate.nik} 
                                            onChange={(e)=> setFormCreate({...formCreate,nik: e.target.value})} 
                                            className="form-control" 
                                            name='nik' 
                                            type="text"
                                        />
                                    </Form.Group>
                                    <Button variant="primary" onClick={createHandler}>
                                        Save Changes
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    {/* <Col className="col-md-6">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Pasangger Name</Form.Label>
                        <Form.Control
                            value={formCreate.passenger_name} 
                            onChange={(e)=> setFormCreate({...formCreate,passenger_name: e.target.value})}
                            name='passenger_name' 
                            type="text"
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID Number</Form.Label>
                            <Form.Control
                                value={formCreate.nik} 
                                onChange={(e)=> setFormCreate({...formCreate,nik: e.target.value})} 
                                className="form-control" 
                                name='nik' 
                                type="text"
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={createHandler}>
                            Save Changes
                        </Button>
                    </Form>
                    </Col> */}
                </Row>
            </Container>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}

export default searchTicket