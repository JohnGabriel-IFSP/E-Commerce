import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { ClientePage } from "../components/PageCliente/ClientePage";

export function MinhaConta(){
    return (
        <div>
            <Header/>
            <ClientePage/>
            <Footer/>
        </div>
    )
}