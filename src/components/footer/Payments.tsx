import styled from "styled-components"

type paymentsProps = {
    display?:string;
}

export const Cards = styled.img`
    max-width: 100%;
`;

export const ImageContainer = styled.div<paymentsProps>`
    width: 70%;
    height: 70%;
    display: ${(props) => props.display};
    flex-wrap: wrap;
    align-items: center;
    margin: 5px;
    gap: 15px;
`;

export function Payments({display}:paymentsProps){
    return(
        <ImageContainer display={display}>
            <Cards src="https://dummyimage.com/80x40/000/fff"/>
            <Cards src="https://dummyimage.com/80x40/000/fff"/>
            <Cards src="https://dummyimage.com/80x40/000/fff"/>
            <Cards src="https://dummyimage.com/80x40/000/fff"/>
            <Cards src="https://dummyimage.com/80x40/000/fff"/>
            <Cards src="https://dummyimage.com/80x40/000/fff"/>
        </ImageContainer>
    )
}