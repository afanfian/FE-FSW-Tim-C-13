import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Row, Col, Table, Button, ButtonGroup } from 'react-bootstrap'
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
        </DasboardLayoutAdmin>
    )
}

export default CustomerList