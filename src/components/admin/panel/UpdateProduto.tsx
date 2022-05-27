import { Button, ButtonContainer, Form, FormContainer, Input, Title } from "./style";

export function UpdateProduct({current}:any){
    return(
            <FormContainer display={current ? 'flex' : 'none'}>
                <Form>
                    <Title>Editar Produto</Title>
                    <ButtonContainer>
                        <Input placeholder = "Buscar Nome Produto"></Input>
                        <Button>Buscar</Button>
                    </ButtonContainer>
                    <Input placeholder = "Nome Produto"></Input>
                    <Input placeholder = "Tamanho"></Input>
                    <Input placeholder = "Quantidade"></Input>
                    <Input placeholder = "Cor"></Input>
                    <Input placeholder = "Categoria"></Input>
                </Form>
            </FormContainer>
    );
}