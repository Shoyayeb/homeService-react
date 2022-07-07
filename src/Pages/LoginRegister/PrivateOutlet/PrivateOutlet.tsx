/* eslint-disable no-restricted-globals */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner";
import useAuth from "../../../Hooks/useAuth";

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
