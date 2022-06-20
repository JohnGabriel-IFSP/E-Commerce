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

    const login = (user: any, password: any) =>{
        console.log('login auth', {user, password});

        const loggedUser ={
            id: "123",
            user,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "secret"){
            setUsuario({ id:"1", user });
            navigate("/");
        }
    };

    const logout = () => {
        console.log('logout');
        localStorage.removeItem("user");
        setUsuario(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider 
        value={{ authenticated: !!usuario, usuario, loading, login, logout}}>
            { children }
        </AuthContext.Provider>
    )

}