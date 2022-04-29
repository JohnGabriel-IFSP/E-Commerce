import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { LoginComponent } from "../components/login/LoginComponent";

export function Login(){
    return (
        <div>
            <Header/>
            <LoginComponent/>
            <Footer/>
        </div>
    )
}