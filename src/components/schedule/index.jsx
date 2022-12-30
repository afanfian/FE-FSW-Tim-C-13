import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Row, Col, Table} from 'react-bootstrap'
import { TicketService } from "../../services/ticketService";
import DasboardLayoutAdmin from '../layoutAdmin'
import './schedule.css'

function Schedule(){

    const [ticket, setTicket] = useState([]) //Get

    const dispatch = useDispatch();

    useEffect(()=>{
    TicketService.getTicket().then((res)=>{
        setTicket(res.data.tickets);
    });
    },[dispatch])
    
    let i = 1;
    return(
        <DasboardLayoutAdmin>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><p>C-13 Aeroplane</p></li>
                    <li className="breadcrumb-item active" aria-current="page">Schedule List</li>
                </ol>
            </nav>
            <Row>
                <Col>
                    <div id="airport">
                        <p className="text-center h3 fw-bold pb-5"><span className="text-green">C-13 AEROPLANE</span> Schedule Ticket List</p>
                        <div>
                        <Table>
                            <thead className="text-center fw-bold">
                                <tr>
                                    <th>No</th>
                                    <th>Airport Name</th>
                                    <th>Airport Location</th>
                                    <th>Departure Date</th>
                                    <th>Arrival Date</th>
                                    <th>Class</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ticket.map((ticket)=>{
                                    return(
                                    <>
                                        <tr className="text-center">
                                            <td>{i++}</td>
                                            <td>{ticket.airport.airport_name}</td>
                                            <td>{ticket.airport.airport_location}</td>
                                            <td>{ticket.departure_date.split("T")[0]}</td>
                                            <td>{ticket.arrival_date.split("T")[0]}</td>
                                            <td>{ticket.class}</td>
                                            <td>{ticket.price}</td>
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

export default Schedule