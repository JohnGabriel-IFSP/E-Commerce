import { Add, Delete, Remove } from "@mui/icons-material"
import { ContentConteiner, LeftSide, RightSide, Title, InputCEP, Button, DivFrete, Div, Text, Bottom, 
    Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, ProductPrice, Top,
    ProductAmountConteiner, ProductAmount, Hr, ProductPriceDetail, SummaryTitle, SummaryItemText, SummaryItemPrice, 
    SummaryItem, Last, ShippingOption, ShippingName, ShippingPrice, InputRadio, Form, CarrinhoVazio } from "./CartStyle"

import { useCart } from "react-use-cart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CartConteiner = () =>{

    const { id } = useParams();
  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  const [active, setActive] = useState('');

  const { addItem } = useCart();


  useEffect(()=>{
    const fetchData = async () => {
        const Data = await fetch(`http://localhost:8080/Products/${id}`)
            .then(response => response.json())
            .then(data => data)
        setItem(Data)
        setImages(Data.imgs)
        setActive(Data.imgs[0].url)
    }
    fetchData()
  }, [])

  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart, 
} = useCart();

{/*if(isEmpty) return <h1>Carrinho Vazio</h1>*/}

    return(
        <ContentConteiner>
            <Title>
                Meu Carrinho
            </Title>
            <Top>
                <LeftSide>
            
                    {items.map((item, index) => (
                        <Product key={index}>
                            <ProductDetail>
                                <Image src={item.imageOne}/>
                                <Details>
                                    <ProductName><b>Produto:</b> {item.productName} </ProductName>
                                    <ProductId><b>ID:</b>{item._id}</ProductId>
                                    <ProductColor color={item.color}/>
                                    <ProductSize><b>Tamanho: </b>{item.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                        <ProductPrice>
                            <ProductAmountConteiner>
                                <Add cursor='pointer' onClick={()=> updateItemQuantity(item._id, item.quantity + 1)} />
                                <ProductAmount>{item.quantity}</ProductAmount>
                                <Remove cursor='pointer' onClick={()=> updateItemQuantity(item._id, item.quantity - 1)} />
                                <Delete onClick={()=> removeItem(item._id)} />
                            </ProductAmountConteiner>
                            <ProductPriceDetail>{item.price}</ProductPriceDetail>
                        </ProductPrice>
                    </Product>
                    ))}
                </LeftSide>
                <RightSide>
                    <SummaryTitle>Resumo do Pedido</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>R$ 99,98</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Frete</SummaryItemText>
                        <SummaryItemPrice>R$ 9,99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Descontos</SummaryItemText>
                        <SummaryItemPrice>-R$ 0,00</SummaryItemPrice>
                    </SummaryItem>
                    <Last>
                        <SummaryItem  color ="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>R$ {cartTotal}</SummaryItemPrice>
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