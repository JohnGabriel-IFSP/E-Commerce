import { Password } from "@mui/icons-material";
import React, { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});


export const AuthProvider = ({ children }:any) => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser) {
            setUsuario(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, [])

    const Login = (user: any, password: any) =>{
        console.log('login auth', {user, password});
    
        const loggedUser ={
            id: "123",
            user,
        };
    
        localStorage.setItem("user", JSON.stringify(loggedUser));
        navigate("/");      
    
    };

    const logout = () => {
        console.log('logout');
        localStorage.removeItem("user");
        setUsuario(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider 
        value={{ authenticated: !!usuario, usuario, loading, Login, logout}}>
            { children }
        </AuthContext.Provider>
    )

}

