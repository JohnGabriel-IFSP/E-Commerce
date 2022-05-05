import { ContentConteiner, LeftSide, RightSide, Title, InputCEP, Button, DivFrete, Div, Text } from "./CartStyle"

export const CartConteiner = () =>{
    return(
        <ContentConteiner>
            <Title>
                Meu Carrinho
            </Title>
            <LeftSide>
                <DivFrete>
                    <Text>Calcula frete e prazo</Text>
                    <Div> 
                        <InputCEP placeholder='Insira seu CEP'></InputCEP>
                        <Button>ok</Button>
                    </Div>
                </DivFrete>
            </LeftSide>
            <RightSide>

            </RightSide>
        </ContentConteiner>
    )
}