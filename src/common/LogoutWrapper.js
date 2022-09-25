import {  Fragment } from "react";
import { removeToken } from "util/token";
import { useNavigate } from "react-router-dom";

const LogoutWrapper = ({ children }) => {
    const navigate = useNavigate();

    const logout = () => {  
        removeToken();
        navigate("/")
    }


    return <div onClick={logout}>
        {children}
    </div>

}

export default LogoutWrapper
