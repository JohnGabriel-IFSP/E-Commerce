import { useEffect, useState } from "react";
import { Arrows } from "./Arrows";
import { Dots } from "./Dots";
import imageSlider from "./imageSlider";
import { SliderContent } from "./SliderContent";
import { Container, SliderContainer } from "./style";

const len = imageSlider.length-1;

export function Slider(){
    const [current, setCurrent] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrent(current === len ? 0 : current + 1);
        }, 5000);
        return ()=> clearInterval(interval);
    }, [current])

    return(
        <Container>
            <SliderContainer>
                <SliderContent current={current} imageSlider={imageSlider}/>
                <Arrows 
                    prevSlide={() => setCurrent(current < 1 ? len : current-1)}
                    nextSlide={() => setCurrent(current === len ? 0 : current+1)}
                />
                <Dots 
                    current={current} 
                    imageSlider={imageSlider} 
                    onclick={(current:any) => setCurrent(current)}
                />
            </SliderContainer>
        </Container>
    );
}