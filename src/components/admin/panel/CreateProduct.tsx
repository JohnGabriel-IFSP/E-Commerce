import { Button, ButtonContainer, Form, FormContainer, InfoContainer, Input, Title } from "./style";

export function CreateProduct({current}:any){
    

    return(
            <FormContainer display={current ? 'flex' : 'none'}>
                <Form>
                    <Title>Cadastrar Produto</Title>
                    <Input placeholder = "Nome Produto"></Input>
                    <Input placeholder = "Categoria"></Input>
                    <InfoContainer>
                        <Input placeholder = "Tamanho"></Input>
                        <Input placeholder = "Quantidade"></Input>
                        <Input placeholder = "Cor"></Input>
                        <Input placeholder = "Preço"></Input>
                    </InfoContainer>
                    <Input placeholder = "Imagem"></Input>
                    <ButtonContainer>
                        <Button>Enviar</Button>
                    </ButtonContainer>
                </Form>
            </FormContainer>
    );
}