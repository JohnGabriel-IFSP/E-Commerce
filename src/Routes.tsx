import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import App from './App'
import { Cadastrar } from './pages/Cadastrar'
import { Carrinho } from './pages/Carrinho'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Produtos } from './pages/Produtos'
import { Sobre } from './pages/Sobre'

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastrar' element={<Cadastrar/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/carrinho' element={<Carrinho/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
            </Routes>
        </Router>
    )
}