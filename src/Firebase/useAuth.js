import { useContext } from "react"
import { AuthContext } from "../component/contextApi/AuthProvider";

const useAuth = ()=>{
    return useContext(AuthContext);
}

export default useAuth 