import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Row, Col, Table, Button, ButtonGroup, Modal, Form,  } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
import { PassengerService } from "../../services/passangerService";
import { DeletePassengerActions, PutPassengerActions } from "../../config/redux/actions/passangerAction";
import './customerList.css'

function CustomerList(){

    const [passenger, setPassenger] = useState([]) //Get
    const [update, setUpdate] = useState(false) //Update
    const [editForm, seteditForm] = useState([]) //Form Edit

    const dispatch = useDispatch();

    useEffect(()=>{
    PassengerService.getPassenger().then((res)=>{
        setPassenger(res.data.passengers);
    });
    },[update])
    
    const updatehandler = async () => {
        await dispatch(PutPassengerActions(editForm.id,editForm));
        setUpdate(!update)
    }

    const deleteHandler = async (id) => {
        await dispatch(DeletePassengerActions(id));
        setUpdate(!update)
    }

    const modalHandler = async (id) => {
        PassengerService.getPassengerId(id).then((res)=>{
        seteditForm(res.data.passenger)
        setShow(true)
    })};

    // Testing Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // console.log(passenger)

    let i = 1;
    return(
        <DasboardLayoutAdmin>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><p>C-13 Aeroplane</p></li>
                    <li className="breadcrumb-item active" aria-current="page">Customer List</li>
                </ol>
            </nav>

            <Row>
                <Col>
                    <div id="customer">
                    <p className="text-center h3 fw-bold pb-5"><span className="text-green">C-13 AEROPLANE</span> Customer List</p>
                        <div>
                        <Table>
                            <thead className="text-center fw-bold">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>ID Number</th>
                                    <th>Button</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passenger.map((passenger)=>{
                                    return(
                                        <>
                                            <tr className="text-center">
                                                <td>{i++}</td>
                                                <td>{passenger.passenger_name}</td>
                                                <td>{passenger.nik}</td>
                                                <ButtonGroup className="mb-2 text-center">
                                                    <Button variant="outline-warning" data-bs-toggle="modal" onClick={()=>modalHandler(passenger.id)} >Edit</Button>
                                                    <Button variant="outline-danger" onClick={()=>deleteHandler(passenger.id)}>Delete</Button>
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
                    <Form.Label>Passenger Name</Form.Label>
                    <Form.Control
                        value={editForm.passenger_name} 
                        onChange={(e)=> seteditForm({...editForm,passenger_name: e.target.value})}
                        name='passenger_name' 
                        type="text"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ID Number</Form.Label>
                    <Form.Control
                        value={editForm.nik} 
                        onChange={(e)=> seteditForm({...editForm,nik: e.target.value})} 
                        className="form-control" 
                        name='nik' 
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

export default CustomerList