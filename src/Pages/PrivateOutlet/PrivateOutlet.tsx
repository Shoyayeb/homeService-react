/* eslint-disable no-restricted-globals */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateOutlet = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <div className="py-2 px-4 bg-indigo-600 w-full animate-ping" />;
  }
  return user.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateOutlet;
