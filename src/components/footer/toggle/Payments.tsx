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
    flex-wrap: wrap;
    gap: 15px;
    margin: 0px 10px 10px 10px;
    padding: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 0px 0px 10px 10px;
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