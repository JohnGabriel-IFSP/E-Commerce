import { AppRoutes } from './Routes';
import {ThemeProvider} from 'styled-components';
import theme from './assets/global/styles/theme';
import './App.css'
import { Cadastrar } from './pages/Cadastrar';
import { Login } from './pages/Login';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes/>
        </ThemeProvider>
    );
}

export default App
