type DotProps ={
    current: any;
    onclick: any;
    imageSlider: any;

}
export function Dots({current, onclick, imageSlider}:DotProps){
    return(
        <div>
            {imageSlider.map((slide:any, index:any) => (
                <span 
                    key={index} 
                    className={`${current === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onclick(index)}
                >
                </span>
            ))}
        </div>
    );
}