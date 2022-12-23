import React, { useEffect, useState } from 'react';
import {
  Container, Navbar, OverlayTrigger, Popover, Stack,
} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './navbarAdmin.css';
import { deleteAllCookies, getCookie } from '../../utils/setCookies.js';

function NavbarAdmin() {
  // const navigate = useNavigate();
const [navbarName, setNavbarName] = useState('');
    useEffect(() => {
    setNavbarName(getCookie('navName'));
});

const handleLogout = async () => {
    await deleteAllCookies();
    // navigate('/');
};

const profilePopover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3" className="text-center">Profile</Popover.Header>
        <Popover.Body className="w-100">
        <div className="d-grid gap-2 w-100">
            <button type="button" className="btn btn-light w-100 d-flex align-items-center border-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person me-2" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <span>
                <a href="/admin/profile" className="text-decoration-none">My Profile</a>
            </span>
            </button>
            <button type="button" className="btn btn-danger w-100 d-flex align-items-center border-0" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left me-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
            </svg>
            <p className="m-0">Sign out</p>
            </button>
        </div>
        </Popover.Body>
    </Popover>
);

return (
    <Navbar expand="xxl" className="navbar">
        <Container fluid className="m-0 px-5">
        <div>
            <h3 className="text-green">C-13 AEROPLANE</h3>
        </div>
        <Navbar.Brand className="fs-2 fw-bolder">{navbarName}</Navbar.Brand>
        <Stack direction="horizontal" gap={4}>
            <div className="chatIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#6C72A7" className="bi bi-chat" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
            </div>
            <div className="bellIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#6C72A7" className="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            </div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={profilePopover}>
            <div className="userIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#6C72A7" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </div>
            </OverlayTrigger>
        </Stack>
        </Container>
    </Navbar>
    );
}

export default NavbarAdmin;
