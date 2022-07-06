import React, { useContext, useEffect, useState } from "react";
import { InfoCliente } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ConteinerPrincipal, Conteiner, Wrapper1, Wrapper2, Item, InfoUser, Title, Div, Input, Label } from "../PageCliente/ClienteStyle"
import { AuthContext } from "../../contexts/auth";





export const ClientePage = () => {
  
    const {Logout}:any = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
       
        const item:any = localStorage.getItem("User")

        if(item){
            const usuario = JSON.parse(item)
            const result = InfoCliente(usuario.username)
            result.then(result => {
            
                setUser(result.data[0])
            })
        }
        else{
            Logout();
        }


    
    const LimpaUser = () =>{
        localStorage.removeItem("User");
        localStorage.removeItem("AuthToken");
        navigate("/")
    }


    return (
        <ConteinerPrincipal>
        <Conteiner>
            <Wrapper1>
                <Item>Informações</Item>
                <Item onClick={() => LimpaUser()}>Sair da conta</Item>
            </Wrapper1>
            <Wrapper2>
                <Div>
                    <Title>Conta Urban Store</Title>
                </Div>
                <InfoUser>
                    <Label>Nome:</Label>
                    <Input type="text" placeholder={user.userfirstname} />
                    <Label>Sobrenome:</Label>
                    <Input type="text" placeholder={user.usersecondname} />
                </InfoUser>
                <InfoUser>
                    <Label>email:</Label>
                    <Input type="text" placeholder={user.email} />
                    <Label>Conta Criada em:</Label>
                    <Input type="text" placeholder={user.created_at} />
                </InfoUser>
               
            </Wrapper2>
        </Conteiner>
        </ConteinerPrincipal>
        
    )

}