import React from 'react';
import { Link } from 'react-router-dom';
import './sidebarAdmin.css';
import {Logo} from '../../assets/index.js'

function SidebarAdmin() {
  return (
    <div className="sidebar px-3">
      <div className="logoWrapper d-flex align-items-center justify-content-center">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="linkWrapper text-white">
        <Link to="/customerlist" className="sideLink d-flex align-items-center mb-3 fw-bold">
          <div className="icon">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7.5C8.93 7.5 10.5 5.93 10.5 4C10.5 2.07 8.93 0.5 7 0.5C5.07 0.5 3.5 2.07 3.5 4C3.5 5.93 5.07 7.5 7 7.5ZM7 2.5C7.83 2.5 8.5 3.17 8.5 4C8.5 4.83 7.83 5.5 7 5.5C6.17 5.5 5.5 4.83 5.5 4C5.5 3.17 6.17 2.5 7 2.5ZM7.05 12.5H2.77C3.76 12 5.47 11.5 7 11.5C7.11 11.5 7.23 11.51 7.34 11.51C7.68 10.78 8.27 10.18 8.98 9.7C8.25 9.57 7.56 9.5 7 9.5C4.66 9.5 0 10.67 0 13V14.5H7V13C7 12.83 7.02 12.66 7.05 12.5ZM14.5 10C12.66 10 9 11.01 9 13V14.5H20V13C20 11.01 16.34 10 14.5 10ZM15.71 8.18C16.47 7.75 17 6.94 17 6C17 4.62 15.88 3.5 14.5 3.5C13.12 3.5 12 4.62 12 6C12 6.94 12.53 7.75 13.29 8.18C13.65 8.38 14.06 8.5 14.5 8.5C14.94 8.5 15.35 8.38 15.71 8.18Z" fill="white" />
              </svg>
          </div>
          <p className="m-0 ms-3">Customer List</p>
        </Link>
        <Link to="/buyticket" className="sideLink d-flex align-items-center mb-3 fw-bold">
          <div className="icon">
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.49988L10 1.49988L19 8.49988V19.4999C19 20.0303 18.7893 20.539 18.4142 20.9141C18.0391 21.2892 17.5304 21.4999 17 21.4999H3C2.46957 21.4999 1.96086 21.2892 1.58579 20.9141C1.21071 20.539 1 20.0303 1 19.4999V8.49988Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="m-0 ms-3">Buy Ticket</p>
        </Link>
        <Link to="/schedule" className="sideLink d-flex align-items-center mb-3 fw-bold">
          <div className="icon">
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.49988L10 1.49988L19 8.49988V19.4999C19 20.0303 18.7893 20.539 18.4142 20.9141C18.0391 21.2892 17.5304 21.4999 17 21.4999H3C2.46957 21.4999 1.96086 21.2892 1.58579 20.9141C1.21071 20.539 1 20.0303 1 19.4999V8.49988Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="m-0 ms-3">Schedule Plane</p>
        </Link>
        <Link to="/payment" className="sideLink d-flex align-items-center mb-3 fw-bold">
          <div className="icon">
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.49988L10 1.49988L19 8.49988V19.4999C19 20.0303 18.7893 20.539 18.4142 20.9141C18.0391 21.2892 17.5304 21.4999 17 21.4999H3C2.46957 21.4999 1.96086 21.2892 1.58579 20.9141C1.21071 20.539 1 20.0303 1 19.4999V8.49988Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="m-0 ms-3">Paymen History</p>
        </Link>
      </div>
    </div>
  );
}

export default SidebarAdmin;
