import { ContentConteiner, LeftSide, RightSide, Title, InputCEP, Button, DivFrete, Div, Text, Bottom, Top,
    Hr, SummaryTitle, SummaryItemText, SummaryItemPrice, SummaryItem, Last, ShippingOption, ShippingName, ShippingPrice, InputRadio, Form } from "./CartStyle"
 
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { addToCart, removeFromCart } from "../../redux/Shopping/actions/cartActions";

export const CartConteiner = () =>{
    const dispatch = useDispatch();
    const cart = useSelector((state:any) => state.cart);
    const {cartItems} = cart;
    const [frete, setfrete] = useState(0);
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

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

    const qtyChangeHandler = (id:any, qty:any) =>{
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id:any) => {
        dispatch(removeFromCart(id))
    }

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
                        <CartItem key = {item.product} item = {item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
                    ))}
                </LeftSide>
                <RightSide>
                    <SummaryTitle>Resumo do Pedido</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>R$ {subTotalPrice.toFixed(2)}</SummaryItemPrice>
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
                            <SummaryItemPrice>R$ {totalPrice.toFixed(2)}</SummaryItemPrice>
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
