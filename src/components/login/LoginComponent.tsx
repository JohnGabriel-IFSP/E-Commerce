import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {Conteiner, Leftsideconteiner, Tittle, Form, Cinput, Input, Link, Button, Rightsideconteiner, Termo} from "./style";


export const LoginComponent = () => {
    return (
      <Conteiner>
          <Leftsideconteiner>
              <Tittle>Login</Tittle>
              <Form>
                  <Input placeholder = "Usuário"/>
                  <Input placeholder = "Senha" type="password"/>
                  <Link>Esqueceu sua senha?</Link>
                  <Button>Entrar</Button>
              </Form>
              <Cinput>
              <FacebookOutlinedIcon fontSize="large"></FacebookOutlinedIcon>
              </Cinput>
            </Leftsideconteiner>
            <Rightsideconteiner>
                <Tittle>É Novo por aqui? <br></br>Faça seu Cadastro</Tittle>
                <Form>
                    <Input placeholder = "Nome" />
                    <Input placeholder = "Sobrenome" />
                    <Input placeholder = "Nome de usuário" />
                    <Input placeholder = "Email" />
                    <Input placeholder = "Senha" type="password"/>
                    <Input placeholder = "Confirme a Senha" type="password"/>
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