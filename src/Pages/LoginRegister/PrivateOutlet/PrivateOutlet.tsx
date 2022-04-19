/* eslint-disable no-restricted-globals */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";

const PrivateOutlet = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Spinner />;
  }
  return user.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateOutlet;
