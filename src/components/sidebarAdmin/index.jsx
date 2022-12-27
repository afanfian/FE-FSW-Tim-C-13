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
        <div className="transponder">
          <div className="sideLinkTitle d-flex align-items-center mb-3 fw-bold">
            <div className="icon">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 9.75V6.75H19.5V8.25H4.5V6.75H3V9.75H8.25V13.059L5.25 14.7278V18H6.75V15.609L9.195 14.25H14.8057L17.25 15.6098V18H18.75V14.7278L15.75 13.059V9.75H21ZM14.25 12.75H9.75V9.75H14.25V12.75ZM0 3.75H7.5V5.25H0V3.75ZM16.5 3.75H24V5.25H16.5V3.75ZM12 1.32635e-06C11.4091 -0.000214874 10.8241 0.116283 10.2783 0.342807C9.73262 0.569331 9.23702 0.901418 8.82 1.32L9.87975 2.37975C10.158 2.10096 10.4885 1.87978 10.8523 1.72887C11.2161 1.57795 11.6061 1.50028 12 1.50028C12.3939 1.50028 12.7839 1.57795 13.1477 1.72887C13.5115 1.87978 13.842 2.10096 14.1202 2.37975L15.1807 1.31925C14.7636 0.900681 14.2679 0.568658 13.722 0.342259C13.1762 0.11586 12.5909 -0.000453088 12 1.32635e-06V1.32635e-06Z" fill="white" />
              </svg>
            </div>
            <p className="m-0 ms-3">C-13 Aeroplane</p>
          </div>
          <Link to="/admin/customer-list" className="sideLink d-flex align-items-center mb-3">
            <div className="icon" />
            <p className="m-0 ms-3">Customer List</p>
          </Link>
          <Link to="/admin/buy-ticket" className="sideLink d-flex align-items-center mb-3">
            <div className="icon" />
            <p className="m-0 ms-3">Buy Ticket List</p>
          </Link>
          <Link to="/admin/schedule-list" className="sideLink d-flex align-items-center mb-3">
            <div className="icon" />
            <p className="m-0 ms-3">Schedule List</p>
          </Link>
          <Link to="/admin/payment-list" className="sideLink d-flex align-items-center mb-3">
            <div className="icon" />
            <p className="m-0 ms-3">Payment List</p>
          </Link>
          <Link to="/admin/airport-list" className="sideLink d-flex align-items-center mb-3">
            <div className="icon" />
            <p className="m-0 ms-3">Airport List</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
