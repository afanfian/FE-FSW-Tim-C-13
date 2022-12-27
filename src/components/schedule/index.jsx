import React from "react";
import { Row, Col, Table } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
import './schedule.css'

function Schedule(){
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
                    <div id="schedule">
                    <p className="text-center h3 fw-bold pb-5">Let's Check Your Departure Schedule!</p>
                        <div>
                        <Table>
                            <thead className="text-center fw-bold">
                                <tr>
                                    <th>No</th>
                                    <th>Plane</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>1</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>C-13 Aeroplane</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                    <td> 2 Hours </td>
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

export default Schedule