import styled from "styled-components";

const ArrowLeft = styled.span`
    cursor: pointer;
    z-index: 15;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 1rem;
    margin-top: -3rem;
    font-size: 20px;
    font-weight: bold;
    border-radius: 0px 5px 5px 0px;
    color: rgba(0, 0, 0, 0.6);
    left: 0;

    &:hover{
        color: white;
        background-color: rgba(0, 0, 0, 0.6);
        transition: all 0.5s ease-in;
    }
`;

const ArrowRight = styled.span`
    cursor: pointer;
    z-index: 15;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 1rem;
    margin-top: -3rem;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px 0px 0px 5px;
    color: rgba(0, 0, 0, 0.6);
    right: 0;

    &:hover{
        color: white;
        background-color: rgba(0, 0, 0, 0.6);
        transition: all 0.5s ease-in;
    }
`;

type ArrowProps = {
    prevSlide: any;
    nextSlide: any;
}
export function Arrows({prevSlide, nextSlide}:ArrowProps){
    return(
        <div>
            <ArrowLeft onClick={prevSlide}>&#10094;</ArrowLeft>
            <ArrowRight onClick={nextSlide}>&#10095;</ArrowRight>
        </div>
    ); 
}