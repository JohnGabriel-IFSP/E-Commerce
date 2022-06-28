import React from "react";

import { ConteinerPrincipal, Conteiner, Wrapper1, Wrapper2, Item, UltPedido, Title } from "../PageCliente/ClienteStyle"


export const ClientePage = () => {
    return (
        <ConteinerPrincipal>
        <Title>Conta Urban Store</Title>
        <Conteiner>
            <Wrapper1>
                <Item>Informações</Item>
                <Item>Pedidos</Item>
            </Wrapper1>
            <Wrapper2>
                <UltPedido></UltPedido>
            </Wrapper2>
        </Conteiner>
        </ConteinerPrincipal>
        
    )

}