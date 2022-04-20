import styled from "styled-components";
import { Sobre } from "../../../pages/Sobre";

type socialProps = {
    display?:string;
}

export const InfoContainer = styled.div<socialProps>`
    width: 100%;
    display: ${(props) => props.display};
    color: black;
`;

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 10px;
`;

export const TextInfo = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

export const LinkInfo = styled.a`
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
`;

export function Information({display}:socialProps){
    return(
        <InfoContainer display={display}>
            <CardContainer>
                <div>
                    <TextInfo>Telefone: </TextInfo>
                    <TextInfo>(xx)-xxxx-xxxx</TextInfo>
                </div>
                <div>
                    <TextInfo>E-mail: </TextInfo>
                    <LinkInfo href="mailto:urban.store@gmail.com">urban.store@gmail.com</LinkInfo>
                </div>
                <LinkInfo href="/sobre">Sobre nós</LinkInfo>
            </CardContainer>
        </InfoContainer>
    )
}