import styled from "styled-components"

type paymentsProps = {
    display?:string;
}

export const Image = styled.img`
    max-width: 100%;
    max-height: 40px;    
`;

export const ImageContainer = styled.div<paymentsProps>`
    width: 100%;
    display: ${(props) => props.display};
`;

export const CardContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 5px;
`;

export function Payments({display}:paymentsProps){
    return(
        <ImageContainer display={display}>
            <CardContainer>
                <Image src="src\assets\icons\payments\master.png"/>
                <Image src="src\assets\icons\payments\visa.png"/>
                <Image src="src\assets\icons\payments\elo.png"/>
                <Image src="src\assets\icons\payments\american.png"/>
                <Image src="src\assets\icons\payments\dinner.png"/>
                <Image src="src\assets\icons\payments\pix.png"/>
                <Image src="src\assets\icons\payments\paypal.png"/>
                <Image src="src\assets\icons\payments\boleto.png"/>
            </CardContainer>
        </ImageContainer>
    )
}