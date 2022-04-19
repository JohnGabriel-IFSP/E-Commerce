import styled from "styled-components";

type socialProps = {
    display?:string;
}

export const InfoContainer = styled.div<socialProps>`
    width: 100%;
    display: ${(props) => props.display};
    color: black;
`;

export function Information({display}:socialProps){
    return(
        <InfoContainer display={display}>
            <span>Telefone</span>
            <span>E-mail</span>
            <span>Endereço</span>
        </InfoContainer>
    )
}