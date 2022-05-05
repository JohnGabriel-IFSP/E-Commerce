import { Add, Remove } from "@mui/icons-material"
import { ContentConteiner, LeftSide, RightSide, Title, InputCEP, Button, DivFrete, Div, Text, Bottom, 
    Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, ProductPrice, Top,
    ProductAmountConteiner, ProductAmount, Hr, ProductPriceDetail } from "./CartStyle"

export const CartConteiner = () =>{
    return(
        <ContentConteiner>
            <Title>
                Meu Carrinho
            </Title>
            <Top>
                <LeftSide>
                    <Text>Produto</Text>
                        <Product>
                            <ProductDetail>
                                <Image src='https://cf.shopee.com.br/file/71ad80f1c46275424f2f84cbe421537c'/>
                                <Details>
                                    <ProductName><b>Produto:</b> Camisa Masculina</ProductName>
                                    <ProductId><b>ID:</b> 010101</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Tamanho: </b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                        <ProductPrice>
                            <ProductAmountConteiner>
                                <Add cursor='pointer'/>
                                <ProductAmount>2</ProductAmount>
                                <Remove cursor='pointer'/>
                            </ProductAmountConteiner>
                            <ProductPriceDetail>R$ 49,99</ProductPriceDetail>
                        </ProductPrice>
                    </Product>
                    <Hr/>
                    <Product>
                            <ProductDetail>
                                <Image src='https://cf.shopee.com.br/file/71ad80f1c46275424f2f84cbe421537c'/>
                                <Details>
                                    <ProductName><b>Produto:</b> Camisa Masculina</ProductName>
                                    <ProductId><b>ID:</b> 010101</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Tamanho: </b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                        <ProductPrice>
                            <ProductAmountConteiner>
                                <Add cursor='pointer'/>
                                <ProductAmount>2</ProductAmount>
                                <Remove cursor='pointer'/>
                            </ProductAmountConteiner>
                            <ProductPriceDetail>R$ 49,99</ProductPriceDetail>
                        </ProductPrice>
                    </Product>
                </LeftSide>
                <RightSide>
                    summary
                </RightSide>
            </Top>
            <Bottom>
                <DivFrete>
                    <Text>Calcula frete e prazo</Text>
                    <Div> 
                        <InputCEP placeholder='Insira seu CEP'></InputCEP>
                        <Button>ok</Button>
                    </Div>
                </DivFrete>
            </Bottom>
        </ContentConteiner>
    )
}