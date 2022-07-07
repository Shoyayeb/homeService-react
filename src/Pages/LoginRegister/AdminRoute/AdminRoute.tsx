import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }: any) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Spinner />;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
