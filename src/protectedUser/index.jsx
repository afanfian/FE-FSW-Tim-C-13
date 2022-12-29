import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteUser = ({ component: Component, ...props }) => {
    const User = useSelector((state) => state.auth.token);
    console.log(User)
    return <>{User ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRouteUser;
