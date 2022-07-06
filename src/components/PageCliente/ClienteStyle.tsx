import styled from "styled-components";

export const ConteinerPrincipal = styled.div`
    display: flex;
    width: 100%;
    height: 800px;
    justify-content: center;
`;

export const Conteiner = styled.div`
    display: flex;
    margin-top: 10rem;
    width: 100%;
    height: auto;
`;

export const Wrapper1 = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
`;
export const Wrapper2 = styled.div`
    flex: 2;
    border: 1px solid teal;
    margin-bottom: 20px;
    margin-right: 20px;
    border-radius: 5px;
`;
export const Item = styled.button`
    border: 1px solid teal;
    color: ${({theme})=> theme.colors.primary};
    box-shadow: 0 0 40px 40px ${({theme})=>theme.colors.white} inset, 0 0 0 0 ${({theme})=>theme.colors.primary};
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    width: 80%;
    height: 70px;
    border-radius: 3px;
    margin: 0 0 10px 10px;
    font-size: large;
    margin-top: 20px;

    :hover{
        box-shadow: 0 0 10px 0 ${({theme})=>theme.colors.secundary} inset, 0 0 10px 4px ${({theme})=>theme.colors.primary};
    }
`;

export const Pedidos = styled.div``;
export const UltPedido = styled.div``;
export const Title = styled.h1`
    display: flex;
    padding: 0;
    margin: 0;
    color: #111; 
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 50px; 
    font-weight: 700; 
    line-height: 64px; 
    margin: 0 0 0; 
    padding: 20px 30px; 
    text-align: center; 
    text-transform: uppercase;
`;

export const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const Npedido = styled.span``;
export const ImagePedido = styled.img``;
export const QtdPedido = styled.span``;
export const ValorPedido = styled.span``;

export const InfoUser = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Input = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
    display: flex;
    padding: 0;
    margin: 0;
    color: #111; 
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 13px; 
    font-weight: 700; 
    line-height: 64px; 
    margin: 0 0 0; 
    padding: 20px 30px; 
    text-align: center; 
    text-transform: uppercase;
`;