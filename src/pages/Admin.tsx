import { AdminLogin } from "../components/admin/login/adminLogin";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function Admin(){
    return(
        <>
            <Header></Header>
            <AdminLogin></AdminLogin>
            <Footer></Footer>
        </>
    )
}