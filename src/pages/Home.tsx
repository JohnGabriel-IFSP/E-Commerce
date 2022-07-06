
import { Categories } from "../components/content/categories/Categories";
import { Footer } from "../components/footer/Footer";
import  { Header }  from "../components/header/Header";
import { Slider } from "../components/slider/Slider";

export function Home(){
    return (
        <div>
            <Header/>
            <Slider/>
            <Categories/>
            <Footer/>
        </div>
    )
}