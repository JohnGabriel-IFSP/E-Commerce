import { Add, Remove } from "@mui/icons-material"
import { ContentConteiner, LeftSide, RightSide, Title, InputCEP, Button, DivFrete, Div, Text, Bottom, 
    Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, ProductPrice, Top,
    ProductAmountConteiner, ProductAmount, Hr, ProductPriceDetail, SummaryTitle, SummaryItemText, SummaryItemPrice, 
    SummaryItem, Last, ShippingOption, ShippingName, ShippingPrice, InputRadio, Form } from "./CartStyle"

import  {CartItem}  from './CartItem'; 
import React, { useState, useEffect } from "react";

export const CartConteiner = ({ cart }:any) =>{

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() =>{
        let items = 0;
        let price = 0;

        cart.forEach((item:any) =>{
            items += item.qty;
            price += item.qty * item.price
        })

        setTotalPrice(price)
        setTotalItems(items)

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

    return(
        <ContentConteiner>
            <Title>
                Meu Carrinho
            </Title>
            <Top>
                <LeftSide>
                    {cart.map((item:any) => (
                        <CartItem key={item._id} itemData = {item}/>
                    ))}
                </LeftSide>
                <RightSide>
                    <SummaryTitle>Resumo do Pedido</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>R$ {totalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Frete</SummaryItemText>
                        <SummaryItemPrice>R$ 9,99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Quantidade de Items</SummaryItemText>
                        <SummaryItemPrice>{totalItems}</SummaryItemPrice>
                    </SummaryItem>
                    <Last>
                        <SummaryItem  color ="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>R$ {totalPrice}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Finalizar Compra</Button>
                    </Last>
                    
                </RightSide>
            </Top>
            <Hr/>
            <Bottom>
                <DivFrete>
                    <Div>
                        <Text>Calcula Frete e Prazo</Text>
                        <Div color="div1"> 
                            <InputCEP placeholder='Insira seu CEP'></InputCEP>
                            <Button color = "ok">Buscar</Button>
                        </Div>
                    </Div>
                    <Div>
                        <Form>
                            <ShippingOption>
                                <Div>
                                    <InputRadio type="radio" id="sedex"></InputRadio>
                                    <ShippingName>Sedex</ShippingName>
                                </Div>
                                <ShippingPrice>R$ 9,99</ShippingPrice>        
                            </ShippingOption>
                            <ShippingOption>
                                <Div>
                                    <InputRadio type="radio" id="PAC"></InputRadio>
                                    <ShippingName>PAC</ShippingName>
                                </Div>
                                <ShippingPrice>R$ 5,99</ShippingPrice>         
                            </ShippingOption>
                        </Form>
                    </Div>    
                </DivFrete>
            </Bottom>
        </ContentConteiner>
    )
}
