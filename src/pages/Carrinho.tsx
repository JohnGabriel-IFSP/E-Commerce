import { Header } from "../components/header/Header";
import { CartConteiner } from "../components/Cart/CartComponent";
import { Footer } from "../components/footer/Footer";
import { CartProvider } from "react-use-cart";

export const Carrinho = () => {
    return(
        <div>
            <Header/>
            <CartProvider>
            <CartConteiner/>
            </CartProvider>
            <Footer/>
        </div>
        )
}