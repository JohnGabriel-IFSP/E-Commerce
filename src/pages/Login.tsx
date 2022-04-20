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
    width: 25%;
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
      </Conteiner>
    )
  }