import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Row, Col, Table, Button, ButtonGroup, Modal, Form } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
// import {  CreateAirportActions, PutAirportActions, DeleteAirportActions } from "../../config/redux/actions/airportActions";
import { CreateTicketActions, PutTicketActions, DeleteTicketActions } from "../../config/redux/actions/ticketAction";
import { TicketService } from "../../services/ticketService";
import { AirportService } from "../../services/airportService";
import './ticketList.css'

function TicketList(){

    const [airport, setAirport] = useState([]) //Get
    const [update, setUpdate] = useState(false) //Update
    const [editForm, seteditForm] = useState([]) //Form Edit
    const [formCreate, setFormCreate] = useState([]) //Create
    const dispatch = useDispatch();
    console.log(formCreate);
    const [ticket, setTicket] = useState([]) //Get
    // Get
    useEffect(()=>{
        TicketService.getTicket().then((res)=>{
            setTicket(res.data.tickets);
        });
        AirportService.getAirport().then((res)=>{
            setAirport(res.data.airports);
        });
    },[update])
    
    // Edit
    const updatehandler = async () => {
        await dispatch(PutTicketActions(editForm.id,editForm));
        setUpdate(!update)
    }

    // Create
    const createHandler = async () => {
        await dispatch(CreateTicketActions(formCreate));
        setUpdate(!update)
        setCreate(true)
    }

    // Delete
    const deleteHandler = async (id) => {
        await dispatch(DeleteTicketActions(id));
        setUpdate(!update)
    }

    // Modal
    const modalHandler = async (id) => {
        TicketService.getTicketId(id).then((res)=>{
        seteditForm(res.data.ticket)
        setShow(true)
    })};
    
    // Testing Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [create, setCreate] = useState(false);
    const handleCloseCreate = () => setCreate(false);

    let i = 1;
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
                    <div className="float-lg-end py-2 px-3 mx-2">
                        <Button variant="outline-primary" onClick={setCreate} >Add Ticket</Button>
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
                                        <td>{i++}</td>
                                        <td>{ticket.airport.airport_name}</td>
                                        <td>{ticket.departure_date.split("T")[0]}</td>
                                        <td>{ticket.arrival_date.split("T")[0]}</td>
                                        <td>{ticket.class}</td>
                                        <td>{ticket.price}</td>
                                        <ButtonGroup className="mb-2 text-center">
                                            <Button variant="outline-warning" data-bs-toggle="modal" onClick={()=>modalHandler(ticket.id)} >Edit</Button>
                                            <Button variant="outline-danger" onClick={()=>deleteHandler(ticket.id)}>Delete</Button>
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
                    <Form.Select aria-label="Default select example"
                        onChange={(e)=> setFormCreate({...formCreate,id_airport: e.target.value})}
                    >
                        <option>Select Airport</option>
                        {airport.map((airport) => (
                            <option value={airport.id} key={airport.id}>
                            {airport.airport_name}
                            </option>
                        ))} 
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Departure Date</Form.Label>
                    <Form.Control
                        value={formCreate.departure_date} 
                        onChange={(e)=> setFormCreate({...formCreate,departure_date: e.target.value})}
                        name='departure_date' 
                        type="date"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Arrival Date</Form.Label>
                    <Form.Control
                        value={formCreate.arrival_date} 
                        onChange={(e)=> setFormCreate({...formCreate,arrival_date: e.target.value})} 
                        className="form-control" 
                        name='arrival_date' 
                        type="date"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Class</Form.Label>
                    <Form.Select aria-label="Default select example"
                        onChange={(e)=> setFormCreate({...formCreate,class: e.target.value})}
                    >
                        <option>Select Class</option>
                            <option value='Economy'>
                                Economy
                            </option>
                            <option value='Business'>
                                Business
                            </option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        value={formCreate.price} 
                        onChange={(e)=> setFormCreate({...formCreate,price: e.target.value})} 
                        className="form-control" 
                        name='price' 
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
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Select aria-label="Default select example">
                        <option>Select Airport</option>
                        {dataAirport.data?.map((airport) => (
                            <option value={airport.city} key={airport.id}>
                            {airport.city}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Departure Date</Form.Label>
                    <Form.Control
                        value={editForm.departure_date} 
                        onChange={(e)=> seteditForm({...editForm,departure_date: e.target.value})}
                        name='departure_date' 
                        type="date"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Arrival Date</Form.Label>
                    <Form.Control
                        value={editForm.arrival_date} 
                        onChange={(e)=> seteditForm({...editForm,arrival_date: e.target.value})} 
                        className="form-control" 
                        name='arrival_date' 
                        type="date"
                    />
                </Form.Group>
                <Form.Select aria-label="Default select example"
                        onChange={(e)=> seteditForm({...editForm,class: e.target.value})}
                    >
                        <option>Select Class</option>
                            <option value='Economy'>
                                Economy
                            </option>
                            <option value='Business'>
                                Business
                            </option>
                    </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        value={editForm.price} 
                        onChange={(e)=> seteditForm({...editForm,price: e.target.value})} 
                        className="form-control" 
                        name='price' 
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