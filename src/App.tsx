import { AppRoutes } from './Routes';
import {ThemeProvider} from 'styled-components';
import theme from './assets/global/styles/theme';
import './App.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes/>
        </ThemeProvider>
        
        /* <AppRoutes/>*/
    );
}

export default App
