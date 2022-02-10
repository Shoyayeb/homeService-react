/* eslint-disable no-restricted-globals */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateOutlet = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateOutlet;
