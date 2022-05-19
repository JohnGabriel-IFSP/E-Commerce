import { Products } from "../components/content/products/Products";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function Produtos(){
    return(
        <>
            <Header></Header>
            <Products></Products>
            <Footer></Footer>
        </>
    );
}