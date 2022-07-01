import { Add, Remove } from "@mui/icons-material"
import { ContentConteiner, LeftSide, RightSide, Title, InputCEP, Button, DivFrete, Div, Text, Bottom, 
    Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, ProductPrice, Top,
    ProductAmountConteiner, ProductAmount, Hr, ProductPriceDetail, SummaryTitle, SummaryItemText, SummaryItemPrice, 
    SummaryItem, Last, ShippingOption, ShippingName, ShippingPrice, InputRadio, Form } from "./CartStyle"
 
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const CartConteiner = () =>{
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    let {cartItems} = cart; //setar como const quando tirar o mock

    const [frete, setfrete] = useState(0);
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    cartItems = [
        {
            product : "1",
            name : "Product 1",
            category : "category 1",
            size : "GG",
            imageUlr : "http://localhost:8080/files/6218c8b0a99c13bd-Can_Coke.jpg",
            description: "Teste description",
            color: "Red",
            price: 19.99,
            countInStock: 5,
            qty: 1
        },
        {
            product : "2",
            name : "Product 2",
            category : "category 1",
            size : "GG",
            imageUlr : "http://localhost:8080/files/6218c8b0a99c13bd-Can_Coke.jpg",
            description: "Teste description",
            color: "Red",
            price: 19.99,
            countInStock: 10,
            qty: 1
        }
    ]

    useEffect(() =>{
        let items = 0;
        let price = 0;
        cartItems.forEach((item:any) =>{
            items += item.qty;
            price += item.qty * item.price
        })
        setSubTotalPrice(price)
        setTotalPrice(price+frete)
        setTotalItems(items)

    }, [cartItems, totalPrice, totalItems, setTotalPrice, setTotalItems])

    return(
        <ContentConteiner>
            <Title>
                Meu Carrinho
            </Title>
            <Top>
                <LeftSide>
                    {cartItems.length === 0 ? (
                        <div>
                            Carrinho Vazio <Link to="/">Voltar</Link>
                        </div>
                    ): cartItems.map((item:any) => (
                        <CartItem key={item.product} itemData = {item}/>
                    ))}
                </LeftSide>
                <RightSide>
                    <SummaryTitle>Resumo do Pedido</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>R$ {subTotalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Frete</SummaryItemText>
                        <SummaryItemPrice>R$ {frete}</SummaryItemPrice>
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
                                    <InputRadio type="radio" id="sedex" name="fav_Shipping" onClick={()=>{setfrete(49.99)}}></InputRadio>
                                    <ShippingName>Sedex</ShippingName>
                                </Div>
                                <ShippingPrice>R$ 49,99</ShippingPrice>        
                            </ShippingOption>
                            <ShippingOption>
                                <Div>
                                    <InputRadio type="radio" id="PAC" name="fav_Shipping" onClick={()=>{setfrete(29.99)}}></InputRadio>
                                    <ShippingName>PAC</ShippingName>
                                </Div>
                                <ShippingPrice>R$ 29,99</ShippingPrice>         
                            </ShippingOption>
                        </Form>
                    </Div>    
                </DivFrete>
            </Bottom>
        </ContentConteiner>
    )
}
