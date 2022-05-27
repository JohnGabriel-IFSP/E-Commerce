import { Button, ButtonContainer, Form, FormContainer, Input, Title } from "./style";

export function SearchOrder({current}:any){
    return(
            <FormContainer display={current ? 'flex' : 'none'}>
                <Form>
                <Title>Buscar Pedido</Title>
                    <ButtonContainer>
                        <Input placeholder = "Buscar Nome Produto"></Input>
                        <Button>Buscar</Button>
                    </ButtonContainer>
                </Form>
            </FormContainer>
    );
}