import { Button, Container, Form, FormContainer, Input, Title } from "./style";

export function AdminLogin(){
    return(
        <Container>
            <FormContainer>
                <Title>Login Admin</Title>
                <Form>
                    <Input placeholder = "Usuário"/>
                    <Input placeholder = "Senha" type="password"/>
                    <Button>Entrar</Button>
                </Form>
            </FormContainer>
        </Container>
    );
}