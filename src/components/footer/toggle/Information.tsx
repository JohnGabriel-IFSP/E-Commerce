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
    margin: 0px 10px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 0px 0px 10px 10px;
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