import styled from "styled-components";
import { Logo } from "../../header/style";

type socialProps = {
    display?:string;
}

export const InfoContainer = styled.div<socialProps>`
    width: 100%;
    display: ${(props) => props.display};
    color: ${({theme}) => theme.colors.black};
`;

export const CardContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5px;
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
                <Logo>Urban Store</Logo>
                <LinkInfo href="/sobre">Sobre nós</LinkInfo>
            </CardContainer>
        </InfoContainer>
    )
}