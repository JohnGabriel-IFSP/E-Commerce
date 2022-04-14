import { Products } from "../components/content/products";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function Home(){
    return (
        <div>
            <Header/>
            <Products/>
            <Footer/>
        </div>
    )
}