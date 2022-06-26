import React, { useState, useContext } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import { Cadastrar } from './pages/Cadastrar'
import { Carrinho } from './pages/Carrinho'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Produtos } from './pages/Produtos'
import { ProdutoUnico } from './pages/ProdutoUnico'
import { Sobre } from './pages/Sobre'
import { MinhaConta } from './pages/MinhaConta'

import { AuthProvider, AuthContext } from './contexts/auth'

export function AppRoutes(){

    const Private = ({children}:any) => {
        const { authenticated, loading }:any = useContext(AuthContext);

        if(loading){
            return <div className='loading'> Carregando...</div>;
        }
        
        if(!authenticated){
            return <Navigate to="/login" />
        }

        return children;
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/cadastrar' element={<Cadastrar/>}/>
                    <Route path='/produtos' element={<Produtos/>}/>
                    <Route path='/carrinho' element={<Carrinho/>}/>
                    <Route path='/sobre' element={<Sobre/>}/>
                    <Route path='/pageproduto' element={<ProdutoUnico/>}/>
                    <Route path='/minhaconta' element={<Private><MinhaConta/></Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}