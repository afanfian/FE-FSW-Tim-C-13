import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Row, Col, Table, Button, ButtonGroup, Modal, Form } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
import { PutAirportActions } from "../../config/redux/actions/airportActions";
import { AirportService } from "../../services/airportService";

function AirportList(){

    const [airport, setAirport] = useState([]) //Get
    const [update, setUpdate] = useState(false) //Update
    const [editForm, seteditForm] = useState([]) //Form Edit
    const dispatch = useDispatch();

    useEffect(()=>{
        AirportService.getAirport().then((res)=>{
            setAirport(res.data.airports);
        });
    },[update])
    // Edit
    const updatehandler = async () => {
        await dispatch(PutAirportActions(editForm.id,editForm));
        setUpdate(!update)
    }
    // Modal
    const modalHandler = async (id) => {
        AirportService.getAirportId(id).then((res)=>{
        seteditForm(res.data.airport)
        setShow(true)
    })};
    
    console.log(editForm)
    // Testing Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    
    return(
        <DasboardLayoutAdmin>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                <li className="breadcrumb-item active" aria-current="page">Airport List</li>
            </ol>
        </nav>

        <Row>
            <Col>
                <div id="schedule">
                    <p className="text-center h3 fw-bold">Let's check the nearest airport!</p>
                    <div className="float-lg-end py-2 px-5 mx-2">
                        <Button variant="outline-primary">Add Aiport</Button>
                    </div>
                    <div>
                    <Table>
                        <thead className="text-center fw-bold">
                            <tr>
                                <th>No</th>
                                <th>Airport Name</th>
                                <th>Aiport Location</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {airport.map((airport)=>{
                                return(
                                <>
                                    <tr className="text-center">
                                        <td>{airport.id}</td>
                                        <td>{airport.airport_name}</td>
                                        <td>{airport.airport_location}</td>
                                        <ButtonGroup className="mb-2 text-center">
                                            <Button variant="outline-warning" data-bs-toggle="modal" onClick={()=>modalHandler(airport.id)} >Edit</Button>
                                            <Button variant="outline-danger">Delete</Button>
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

export default AirportList