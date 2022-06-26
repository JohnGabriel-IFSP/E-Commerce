import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { Google, Twitter } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {Conteiner, Leftsideconteiner, Tittle, Form, Cinput, Input, Link, Button, Rightsideconteiner, Termo} from "./style";


export const LoginComponent = () => {

    const {authenticated, login }:any = useContext(AuthContext);

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [name, setName] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmitLogin = (e:any) =>{
        e.preventDefault();
        console.log("submit", {user, password});
        login(user, password);
    };

    const handleSubmitRegister = (e:any) =>{
        e.preventDefault();
        console.log('submit', {name, sobrenome, user, email, password, confirmPassword})
    }

    return (
      <Conteiner>
          <Leftsideconteiner>
              <Tittle>Login</Tittle>
              <p>{String(authenticated)}</p>
              <Form onSubmit={handleSubmitLogin}>
                  <Input 
                  type='username' 
                  value={user} 
                  onChange={(e) => setUser(e.target.value)} 
                  placeholder = "Usuário"/>
                  <Input 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder = "Senha" 
                  type="password"/>
                  <Link>Esqueceu sua senha?</Link>
                  <Button type='submit'>Entrar</Button>
              </Form>
              <Cinput>
              <FacebookOutlinedIcon fontSize="large" cursor='pointer'></FacebookOutlinedIcon>
              <Twitter fontSize='large' cursor='pointer'></Twitter>
              <Google fontSize='large'cursor='pointer'></Google>
              </Cinput>
            </Leftsideconteiner>
            <Rightsideconteiner>
                <Tittle>É Novo por aqui? <br></br>Faça seu Cadastro</Tittle>
                <Form onSubmit={handleSubmitRegister}>
                    <Input 
                    type="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder = "Nome" />
                    <Input 
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    placeholder = "Sobrenome" />
                    <Input 
                    type="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder = "Nome de usuário" />
                    <Input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder = "Email" />
                    <Input 
                    placeholder = "Senha" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <Input 
                    placeholder = "Confirme a Senha" 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}/>

                    <Termo>Ao finalizar meu cadastro certifico que tenho 
                           mais de 18 anos de idade e aceito os Termos e 
                           Condições e a <b>Política de Privacidade</b>
                    </Termo>
                    <Button type='submit'> Criar </Button>
                </Form>
            </Rightsideconteiner>
      </Conteiner>
    )
  }