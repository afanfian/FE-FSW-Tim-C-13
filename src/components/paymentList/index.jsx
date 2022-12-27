import React from "react";
import { Row, Col, Table } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
import './paymentList.css'

function PaymentList(){
    return(
        <DasboardLayoutAdmin>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><p>C-13 Aeroplane</p></li>
                    <li className="breadcrumb-item active" aria-current="page">Payment List</li>
                </ol>
            </nav>

            <Row>
                <Col>
                    <div id="payment">
                    <p className="text-center h3 fw-bold pb-5">Customer Payment Data <span className="text-green">C-13 AEROPLANE</span></p>
                        <div>
                        <Table>
                            <thead className="text-center fw-bold">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>1</td>
                                    <td>Fian Awamiry Maulana</td>
                                    <td>afanfian@its.ac.id</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Selly</td>
                                    <td>selly123@gmail.com</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Zaki Maulana</td>
                                    <td>Zakikomeng0812@its.ac.id</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Agnes Nababan</td>
                                    <td>agnes97@gmail.com</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Albi Tegar</td>
                                    <td>albi88@gmail.com</td>
                                    <td> 07.00 <br /> Bandar Udara Internasional Soekarno-Hatta (CGK)</td>
                                    <td> 09.00 <br /> Bandar Udara Internasional Ngurah Rai (DPS)</td>
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

export default PaymentList