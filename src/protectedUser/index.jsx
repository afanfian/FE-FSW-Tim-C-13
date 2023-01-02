import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteUser = ({ component: Component, ...props }) => {
    const {token} = useSelector((state) => state.auth);
    // console.log(token)
    return <>{token ? <Outlet /> : <Navigate to="/no-access-user" />}</>;
};

export default ProtectedRouteUser;
