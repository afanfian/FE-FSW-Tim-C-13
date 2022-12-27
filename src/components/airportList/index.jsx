import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Row, Col, Table } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
import { AirportService } from "../../services/airportService";

function AirportList(){
    const [airport, setAirport] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        AirportService.getAirport().then((res)=>{
            setAirport(res.data.airports);
        });
    },[dispatch])

    return(
        <DasboardLayoutAdmin>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                <li className="breadcrumb-item active" aria-current="page">Schedule List</li>
            </ol>
        </nav>

        <Row>
            <Col>
                <div id="schedule">
                <p className="text-center h3 fw-bold pb-5">Let's Check Your Departure Schedule!</p>
                    <div>
                    <Table>
                        <thead className="text-center fw-bold">
                            <tr>
                                <th>No</th>
                                <th>Airport Name</th>
                                <th>Aiport Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {airport.map((airport)=>{
                                return(
                                <>
                                    <tr>
                                        <td>{airport.id}</td>
                                        <td>{airport.airport_name}</td>
                                        <td>{airport.airport_location}</td>
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

export default AirportList