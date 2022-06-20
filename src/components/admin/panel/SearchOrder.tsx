import { Button, ButtonContainer, Fields, Form, FormContainer, Input, Label, Title } from "./style";

export function SearchOrder({current}:any){
    return(
            <FormContainer display={current ? 'flex' : 'none'}>
                <Form onSubmit={()=>{}}>
                    <Title>Buscar Pedido</Title>
                    <Fields>
                        <Input placeholder=" "></Input>
                        <Label>Código do Pedido</Label>
                    </Fields>
                    <ButtonContainer>
                        <Button type="submit">Enviar</Button>
                    </ButtonContainer>
                </Form>
            </FormContainer>
    );
}