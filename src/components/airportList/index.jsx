import React from "react";
import { Row, Col, Table } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'

function AirportList(){
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
                        <tbody className="text-center">
                            <tr>
                                <td>1</td>
                                <td> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                <td> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                            </tr>
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