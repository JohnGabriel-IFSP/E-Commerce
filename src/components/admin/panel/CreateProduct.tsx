import { Button, ButtonContainer, Container, Form, FormContainer, Input } from "./style";

export function CreateProduct(){
    return(
            <FormContainer>
                <Form>
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