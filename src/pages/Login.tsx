import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Conteiner = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background: #34083f;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;

const Leftsideconteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 90%;
    justify-content: center;
    align-items: center;
    background-color: #881297;
    box-shadow: 0px 10px 10px #000;
    border-radius: 10px;

    @media screen and (max-width: 600px) {
        width: 80%;
        height: 60%;
        margin-top: 1rem;
        padding: 0.5rem;
    }
`;

const Rightsideconteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 90%;
    justify-content: center;
    align-items: center;
    background-color: #881297;
    box-shadow: 0px 10px 10px #000;
    border-radius: 10px;

    @media screen and (max-width: 600px) {
        width: 80%;
        height: auto;
        margin-top: 1rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
    }
`;

const Tittle = styled.h1`
    font-size: 35px;
    font-weight: 800;
    color: white;
    justify-content: flex-start;

    @media screen and (max-width: 600px) {
        margin-bottom: 3%;
        font-size: 25px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

const Input = styled.input`
    flex: 1;
    border: none;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
`;

const Link = styled.a`
    font-size: 15px;
    margin: 5px 0px;
    cursor: pointer;
    text-decoration: underline;
`;

const Button = styled.button`
    width: 100%;
    height: 35px;
    border: none;
    background-color: lightgrey;
    cursor: pointer;
    border-radius: 5px;
`;

const Termo = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Cinput = styled.div`
`;

export const Login = () => {
    return (
      <Conteiner>
          <Leftsideconteiner>
              <Tittle>Login</Tittle>
              <FacebookOutlinedIcon fontSize="large"></FacebookOutlinedIcon>
              <Form>
                  <Cinput>
                  </Cinput>
                  <Input placeholder = "Usuário"/>
                  <Input placeholder = "Senha"/>
                  <Link>Esqueceu sua senha?</Link>
                  <Button>Entrar</Button>
              </Form>
            </Leftsideconteiner>
            <Rightsideconteiner>
                <Tittle>É Novo por aqui? <br></br>Faça seu Cadastro</Tittle>
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
            </Rightsideconteiner>
      </Conteiner>
    )
  }