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
    display: grid;
    grid-template-columns: auto auto auto auto;
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
                <Image src="https://us-storage-files.s3.sa-east-1.amazonaws.com/payments/master.png"/>
                <Image src="https://us-storage-files.s3.sa-east-1.amazonaws.com/payments/visa.png"/>
                <Image src="https://us-storage-files.s3.sa-east-1.amazonaws.com/payments/elo.png"/>
                <Image src="https://us-storage-files.s3.sa-east-1.amazonaws.com/payments/american.png"/>
                <Image src="https://us-storage-files.s3.sa-east-1.amazonaws.com/payments/dinner.png"/>
                <Image src="https://us-storage-files.s3.sa-east-1.amazonaws.com/payments/pix.png"/>
                <Image src="https://us-storage-files.s3.sa-east-1.amazonaws.com/payments/paypal.png"/>
                <Image src="https://us-storage-files.s3.sa-east-1.amazonaws.com/payments/boleto.png"/>
            </CardContainer>
        </ImageContainer>
    )
}