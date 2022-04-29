import { DescriptionSlider, ImagemSlider, Slide, TitleSlider } from "./style";

type SliderContentProps={
    current:any;
    imageSlider:any;
}

export function SliderContent({current, imageSlider}:SliderContentProps){
    return(
        <section>
            {imageSlider.map((slide:any,index:any) =>(
                <Slide key={index} display={index === current ? "inline-block" : "none"} >  
                    <ImagemSlider src={slide.urls}/>
                    <TitleSlider>{slide.title}</TitleSlider>
                    <DescriptionSlider>{slide.description}</DescriptionSlider>
                </Slide>
            ))}
        </section>
    );
}