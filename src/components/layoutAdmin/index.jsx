import React, { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import './LayoutAdmin.css';
import SidebarAdmin from '../sidebarAdmin'
import NavbarAdmin from '../navbarAdmin'
// import { getCookie } from '../../utils/setCookies.js';
// import { useNavigate } from 'react-router-dom';

function DashboardLayoutAdmin({ children }) {
    // const navigate = useNavigate();
    // const auth = { token: getCookie('token'), role: getCookie('role') };

    // useEffect(() => {
    //     if (!auth.token) navigate('/');

    //     // nanti buat halaman 404
    //     if (auth.token && auth.role.toLowerCase() !== 'admin') navigate('/not-found-page');
    //     }, []);

    //     if (auth.token && auth.role.toLowerCase() === 'admin') {
        return (
            <Stack direction="horizontal" className="body-wrapper align-items-start w-100 vh-100" gap={0}>
            <SidebarAdmin />
            <div className="main-content justify-content-start">
                <NavbarAdmin />
                <div className="pt-3 px-5">
                {children}
                </div>
            </div>
            </Stack>
        );
    // }
}

export default DashboardLayoutAdmin;
