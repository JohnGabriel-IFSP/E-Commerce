import { Button, ButtonContainer, Form, FormContainer, Input, Title } from "./style";

export function CreateProduct({current}:any){
    

    return(
            <FormContainer display={current ? 'flex' : 'none'}>
                <Form>
                    <Title>Cadastrar Produto</Title>
                    <Input placeholder = "Nome Produto"></Input>
                    <Input placeholder = "Tamanho"></Input>
                    <Input placeholder = "Quantidade"></Input>
                    <Input placeholder = "Cor"></Input>
                    <Input placeholder = "Categoria"></Input>
                    <ButtonContainer>
                        <Button>Enviar</Button>
                    </ButtonContainer>
                </Form>
            </FormContainer>
    );
}