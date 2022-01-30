import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";


const useAuth:any = ()=> {
    const auth = useContext(AuthContext);
    return auth;
    
}
export default useAuth;