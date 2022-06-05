import { AppRoutes } from './Routes';
import {ThemeProvider} from 'styled-components';
import theme from './assets/global/styles/theme';
import './App.css'
import { ProdutoUnico } from './pages/ProdutoUnico';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ProdutoUnico></ProdutoUnico>
        </ThemeProvider>
        
        /* <AppRoutes/>*/
    );
}

export default App
