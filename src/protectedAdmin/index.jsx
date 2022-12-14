import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteAdmin = ({ component: Component, ...props }) => {
    const Admin = useSelector((state) => state.auth.roleId);
    // console.log(Admin)
    return <>{Admin ? <Outlet /> : <Navigate to="/no-access-admin" />}</>;
};

export default ProtectedRouteAdmin;