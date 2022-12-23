import React from "react";
import { Row, Col, Table } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
import './customerList.css'

function CustomerList(){
    return(
        <DasboardLayoutAdmin>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Customer List</li>
                </ol>
            </nav>

            <Row>
                <Col>
                    <div id="customer">
                    <p className="text-center h3 fw-bold pb-5">Yuk Cek Jadwal Pemberangkatanmu !</p>
                        <div>
                        <Table>
                            <thead className="text-center fw-bold">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>1</td>
                                    <td>Fian Awamiry Maulana</td>
                                    <td>089515776243</td>
                                    <td>Jl. Perumahan Binar Asri</td>
                                    <td>Afanfian89@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Zaki Maulana</td>
                                    <td>089515776243</td>
                                    <td>Jl. Perumahan Kavling Tanah Putih</td>
                                    <td>Zaki19@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Agnes Nababan</td>
                                    <td>089515776243</td>
                                    <td>Jl. Patimura No.10</td>
                                    <td>Agnes1232@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Selly</td>
                                    <td>089515776243</td>
                                    <td>Jl. Kalimantan No.90</td>
                                    <td>Selly9897@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Albi</td>
                                    <td>089515776243</td>
                                    <td>Jl. Wonorejo No.18</td>
                                    <td>Albi97@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Sulthan</td>
                                    <td>089515776243</td>
                                    <td>Jl. Surya Asri No.87</td>
                                    <td>Sulthantaks12@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Dimas</td>
                                    <td>089515776243</td>
                                    <td>Jl. Surya Asri No.12</td>
                                    <td>Dimas217@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Daud</td>
                                    <td>089515776243</td>
                                    <td>Jl. Rungkut Asri No.128</td>
                                    <td>Daud86@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Widi</td>
                                    <td>089515776243</td>
                                    <td>Jl. Rungkut Harapan No.128</td>
                                    <td>Widi172@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Afan</td>
                                    <td>089515776243</td>
                                    <td>Jl. Rungkut Baban No.128</td>
                                    <td>askasa86@gmail.com</td>
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

export default CustomerList