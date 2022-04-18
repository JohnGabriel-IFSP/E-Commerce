import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    top: 85%;
    justify-content: center;
    z-index: 15;
`;

interface dotProps{
    background: string;
}
const Dot = styled.span<dotProps>`
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0px 3px;
    background-color: ${(props) => props.background};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

type DotProps ={
    current: any;
    onclick: any;
    imageSlider: any;
}

export function Dots({current, onclick, imageSlider}:DotProps){
    return(
        <Container>
            {imageSlider.map((slide:any, index:any) => (
                <Dot 
                    key={index} 
                    onClick={() => onclick(index)}
                    background = {current === index ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.3)"}
                >
                    
                </Dot>
            ))}
        </Container>
    );
}