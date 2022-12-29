import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Row, Col, Table} from 'react-bootstrap'
import { AuthService } from "../../services/authService";
import DasboardLayoutAdmin from '../layoutAdmin'
import './userList.css'

function UserList(){

    const [user, setUser] = useState([]) //Get

    const dispatch = useDispatch();

    useEffect(()=>{
    AuthService.getAllProfile().then((res)=>{
        setUser(res.data.allUsers);
    });
    },[dispatch])
    
    let i = 1;
    return(
        <DasboardLayoutAdmin>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><p>C-13 Aeroplane</p></li>
                    <li className="breadcrumb-item active" aria-current="page">User List</li>
                </ol>
            </nav>
            <Row>
                <Col>
                    <div id="userList">
                        <p className="text-center h3 fw-bold mb-5">Let's Check Your Departure Schedule!</p>
                        <div>
                        <Table>
                            <thead className="text-center fw-bold">
                                <tr>
                                    <th>No</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Photo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user)=>{
                                    return(
                                    <>
                                        <tr className="text-center">
                                            <td>{i++}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone_number}</td>
                                            <td>{user.address}</td>
                                            <td><img src={user.photo} alt="photoUser" width="80px" /></td>
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

export default UserList