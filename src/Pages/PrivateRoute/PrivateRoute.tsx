import { useLocation } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import Spinner from "./../Shared/Spinner/Spinner";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user, setShowLoginModal } = useAuth();
  const location: any = useLocation();
  if (!user.email) {
    console.log(location);
    setShowLoginModal(true);
    return <Spinner />;
  }
  return children;
};

export default PrivateRoute;
