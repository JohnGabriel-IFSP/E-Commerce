import styled from "styled-components";

export const ConteinerPrincipal = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Conteiner = styled.div`
    display: flex;
    margin-top: 10rem;
    width: 100%;
    height: auto;
`;

export const Wrapper1 = styled.div`
    flex: 1;
`;
export const Wrapper2 = styled.div`
    flex: 2;
`;
export const Item = styled.button`
    border: none;
    color: ${({theme})=> theme.colors.primary};
    box-shadow: 0 0 40px 40px ${({theme})=>theme.colors.white} inset, 0 0 0 0 ${({theme})=>theme.colors.primary};
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    width: 80%;
    height: 70px;
    border-radius: 3px;
    margin: 0 0 10px 10px;
    font-size: large;

    :hover{
        box-shadow: 0 0 10px 0 ${({theme})=>theme.colors.secundary} inset, 0 0 10px 4px ${({theme})=>theme.colors.primary};
    }
`;

export const Pedidos = styled.div``;
export const UltPedido = styled.div``;
export const Title = styled.h1`
    display: flex;
    flex-wrap: wrap;
`;