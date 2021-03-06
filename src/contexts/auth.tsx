import { Password } from "@mui/icons-material";
import React, { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }:any) => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('AuthToken');

        if(recoveredUser) {
            setUsuario(JSON.parse(recoveredUser));
        } setLoading(false);
    }, [])

    const Login = (user: any, password: any) =>{
        createSession(user, password);
        navigate("/");      
    };

    const logout = () => {
        localStorage.removeItem("AuthToken");
        localStorage.removeItem("User")
        setUsuario(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider 
        value={{ authenticated: !!usuario, usuario, loading, Login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

