import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";

const AdminRoute = ({ children, ...rest }: any) => {
  const { user, admin, isLoading } = useAuth();
  console.log(admin);
  console.log(user);
  const location = useLocation();
  if (isLoading) {
    return <Spinner />;
  }
  if (user.email && admin.role) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
