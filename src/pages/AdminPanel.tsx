import { Panel } from "../components/admin/panel/Panel";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function AdminPanel(){
    return(
        <>
            <Header></Header>
            <Panel></Panel>
            <Footer></Footer>
        </>
    )
}