import React, { useState, useContext } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import { Admin } from './pages/Admin'
import { AdminPanel } from './pages/AdminPanel'
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
                    <Route path='/produtos/:name' element={<Produtos/>}/>
                    <Route path='/carrinho' element={<Carrinho/>}/>
                    <Route path='/sobre' element={<Sobre/>}/>
                    <Route path='/pageproduto/:id' element={<ProdutoUnico/>}/>
                    <Route path='/minhaconta' element={<Private><MinhaConta/></Private>}/>
                    <Route path='/admin' element={<Admin/>}/>
                    <Route path='/panel' element={<AdminPanel/>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}