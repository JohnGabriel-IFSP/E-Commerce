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
    height: 100%;
    display: ${(props) => props.display};
    align-items: center; 
`;

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: 15px;
    margin-right: 15px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 10px;
`;

export function Payments({display}:paymentsProps){
    return(
        <ImageContainer display={display}>
            <CardContainer>
                <Image src="src\assets\payments\master.png"/>
                <Image src="src\assets\payments\visa.png"/>
                <Image src="src\assets\payments\elo.png"/>
                <Image src="src\assets\payments\american.png"/>
                <Image src="src\assets\payments\dinner.png"/>
                <Image src="src\assets\payments\pix.png"/>
                <Image src="src\assets\payments\paypal.png"/>
                <Image src="src\assets\payments\boleto.png"/>

            </CardContainer>
        </ImageContainer>
    )
}