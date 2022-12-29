import React,{ useState , useEffect } from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import DasboardLayoutAdmin from '../layoutAdmin'
import { useDispatch } from 'react-redux';
// import { getCustomerActions } from '../../config/redux/actions/customerActions'
import { CustomerService } from '../../services/customerService'
import './customerList.css'

function CustomerList(){
    const [customer, setCustomer] = useState([]) //Get

    const dispatch = useDispatch();
   
    useEffect(()=>{
        CustomerService.getCustomer().then((res)=>{
            setCustomer(res.data.customers);
        });
    },[(dispatch)]
    )

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
                        <p className="text-center h3 fw-bold mb-5">Customer List</p>
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
                            <tbody>
                                {customer.map((customer)=>{
                                    return(
                                    <>
                                        <tr className="text-center">
                                            <td>{i++}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.phone}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.email}</td>
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