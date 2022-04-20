import styled from "styled-components"

const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Tittle = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px; 
`;

const Termo = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightgrey;
    cursor: pointer;
`;

export const Cadastrar = () => {
  return (
    <Conteiner>
        <Wrapper>
            <Tittle>NOVA CONTA</Tittle>
                <Form>
                    <Input placeholder = "Nome" />
                    <Input placeholder = "Sobrenome" />
                    <Input placeholder = "Nome de usuário" />
                    <Input placeholder = "Email" />
                    <Input placeholder = "Senha" />
                    <Input placeholder = "Confirme a Senha" />
                    <Termo>Ao finalizar meu cadastro certifico que tenho 
                        mais de 18 anos de idade e aceito os Termos e 
                        Condições e a <b>Política de Privacidade</b>
                    </Termo>
                    <Button>Criar</Button>
                </Form>
        </Wrapper>
    </Conteiner>
  )
}