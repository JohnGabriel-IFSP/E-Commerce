import { Add, Remove } from "@mui/icons-material"
import { ContentConteiner, LeftSide, RightSide, Title, InputCEP, Button, DivFrete, Div, Text, Bottom, 
    Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, ProductPrice, Top,
    ProductAmountConteiner, ProductAmount, Hr, ProductPriceDetail, SummaryTitle, SummaryItemText, SummaryItemPrice, 
    SummaryItem, Last, ShippingOption, ShippingName, ShippingPrice, InputRadio, Form } from "./CartStyle"

import conteudoCarrinho from "./conteudoCarrinho"

export const CartConteiner = () =>{
    return(
        <ContentConteiner>
            <Title>
                Meu Carrinho
            </Title>
            <Top>
                <LeftSide>
                    {conteudoCarrinho.map((item:any) => (
                        <Product>
                            <ProductDetail>
                                <Image src='https://cf.shopee.com.br/file/71ad80f1c46275424f2f84cbe421537c'/>
                                <Details>
                                    <ProductName><b>Produto:</b> Camisa Masculina</ProductName>
                                    <ProductId><b>ID:</b>{item.id_produto}</ProductId>
                                    <ProductColor color={item.cor}/>
                                    <ProductSize><b>Tamanho: </b>{item.tamanho}</ProductSize>
                                </Details>
                            </ProductDetail>
                        <ProductPrice>
                            <ProductAmountConteiner>
                                <Add cursor='pointer'/>
                                <ProductAmount>{item.quantidade}</ProductAmount>
                                <Remove cursor='pointer'/>
                            </ProductAmountConteiner>
                            <ProductPriceDetail>R$ 49,99</ProductPriceDetail>
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
                            <SummaryItemPrice>R$ 109,97</SummaryItemPrice>
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