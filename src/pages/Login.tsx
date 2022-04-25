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
    width: 30%;
    padding: 20px;
    background-color: white;
    margin-right: 15%;
`;

const Wrapper2 = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
`;

const Tittle = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px; 
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin-top: 10px;
    background-color: lightgrey;
    cursor: pointer;
`;

const Termo = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Link = styled.a`
    font-size: 12px;
    margin: 5px 0px;
    cursor: pointer;
    text-decoration: underline;
`;

export const Login = () => {
    return (
      <Conteiner>
          <Wrapper>
              <Tittle>LOGIN</Tittle>
                  <Form>
                      <Input placeholder = "Usuário" />
                      <Input placeholder = "Senha" />
                      <Link>Esqueceu sua senha?</Link>
                      <Link>Crie uma nova conta</Link>
                      <Button>Entrar</Button>
                  </Form>
          </Wrapper>
          <Wrapper2>
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
        </Wrapper2>
      </Conteiner>
    )
  }