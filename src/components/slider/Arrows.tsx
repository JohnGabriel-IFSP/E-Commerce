type ArrowProps = {
    prevSlide: any;
    nextSlide: any;
}
export function Arrows({prevSlide, nextSlide}:ArrowProps){
    return(
        <div>
            <span onClick={prevSlide}>&#10094;</span>
            <span onClick={nextSlide}>&#10095;</span>
        </div>
    ); 
}