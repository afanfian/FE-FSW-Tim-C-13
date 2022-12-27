import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Row, Col, Table, Button, ButtonGroup, Modal, Form } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
import {  CreateAirportActions, PutAirportActions, DeleteAirportActions } from "../../config/redux/actions/airportActions";
import { TicketService } from "../../services/ticketService";
import { AirportService } from "../../services/airportService";
import './ticketList.css'

function TicketList(){

    const [airport, setAirport] = useState([]) //Get
    const [update, setUpdate] = useState(false) //Update
    const [editForm, seteditForm] = useState([]) //Form Edit
    const [formCreate, setFormCreate] = useState([]) //Create
    const dispatch = useDispatch();

    const [ticket, setTicket] = useState([]) //Get
    // Get
    useEffect(()=>{
        TicketService.getTicket().then((res)=>{
            setTicket(res.data.tickets);
        });
    },[update])
    
    // Edit
    const updatehandler = async () => {
        await dispatch(PutAirportActions(editForm.id,editForm));
        setUpdate(!update)
    }

    // Create
    const createHandler = async () => {
        await dispatch(CreateAirportActions(formCreate));
        setUpdate(!update)
        setCreate(true)
    }

    // Delete
    const deleteHandler = async (id) => {
        await dispatch(DeleteAirportActions(id));
        setUpdate(!update)
    }

    // Modal
    const modalHandler = async (id) => {
        AirportService.getAirportId(id).then((res)=>{
        seteditForm(res.data.airport)
        setShow(true)
    })};
    
    // Testing Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [create, setCreate] = useState(false);
    const handleCloseCreate = () => setCreate(false);

    
    return(
        <DasboardLayoutAdmin>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><p>C-13 Aeroplane</p></li>
                <li className="breadcrumb-item active" aria-current="page">Airport List</li>
            </ol>
        </nav>

        <Row>
            <Col>
                <div id="airport">
                    <p className="text-center h3 fw-bold"><span className="text-green">C-13 AEROPLANE</span> Flight Ticket List</p>
                    <div className="float-lg-end py-2 px-5 mx-2">
                        <Button variant="outline-primary" onClick={setCreate} >Add Aiport</Button>
                    </div>
                    <div>
                    <Table>
                        <thead className="text-center fw-bold">
                            <tr>
                                <th>No</th>
                                <th>Airport Name</th>
                                <th>Departure Date</th>
                                <th>Arrival Date</th>
                                <th>Class</th>
                                <th>Price</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticket.map((ticket)=>{
                                return(
                                <>
                                    <tr className="text-center">
                                        <td>{ticket.id}</td>
                                        <td>{ticket.airport.airport_name}</td>
                                        <td>{ticket.departure_date}</td>
                                        <td>{ticket.arrival_date}</td>
                                        <td>{ticket.class}</td>
                                        <td>{ticket.price}</td>
                                        <ButtonGroup className="mb-2 text-center">
                                            <Button variant="outline-warning" data-bs-toggle="modal" onClick={()=>modalHandler(airport.id)} >Edit</Button>
                                            <Button variant="outline-danger" onClick={()=>deleteHandler(airport.id)}>Delete</Button>
                                        </ButtonGroup>
                                    </tr>
                                </>
                                )
                            })}
                        </tbody>
                    </Table>
                    </div>
                </div>
            </Col>
        </Row>
        
        {/* Modal Create */}
        <Modal show={create} onHide={handleCloseCreate}>
            <Modal.Header closeButton>
            <Modal.Title className="text-center">Add Airport</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Airport Name</Form.Label>
                    <Form.Control
                        value={formCreate.airport_name} 
                        onChange={(e)=> setFormCreate({...formCreate,airport_name: e.target.value})}
                        name='airport_name' 
                        type="text"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Airport Location</Form.Label>
                    <Form.Control
                        value={formCreate.airport_location} 
                        onChange={(e)=> setFormCreate({...formCreate,airport_location: e.target.value})} 
                        className="form-control" 
                        name='airport_location' 
                        type="text"
                    />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCreate}>
                Close
            </Button>
            <Button variant="primary" onClick={createHandler}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>

        {/* Modal Edit */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className="text-center">Update Airport</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Airport Name</Form.Label>
                    <Form.Control
                        value={editForm.airport_name} 
                        onChange={(e)=> seteditForm({...editForm,airport_name: e.target.value})}
                        name='airport_name' 
                        type="text"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Airport Location</Form.Label>
                    <Form.Control
                        value={editForm.airport_location} 
                        onChange={(e)=> seteditForm({...editForm,airport_location: e.target.value})} 
                        className="form-control" 
                        name='airport_location' 
                        type="text"
                    />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={updatehandler}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        
    </DasboardLayoutAdmin>
    )
}

export default TicketList