import { Google, Twitter } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {Conteiner, Leftsideconteiner, Tittle, Cinput, Input, Link, Button, Rightsideconteiner, Termo, Ldiv} from "./style";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import Axios from "axios";
import axios from 'axios';

export const LoginComponent = () => {

  const handleClickLogin = (values: any) => {
    Axios.post("https://localhost:8080/LoginCliente", {
      email: values.email,
      password: values.password,
    }).then((response) =>{
      console.log(response)
    })
  };
  const validationLogin = Yup.object().shape({
    email: Yup.string().email("Não é um email").required(),
    password: Yup.string().min(8, "A senha deve ter no minimo 8 dígitos").required(),
  });
  const handleClickCadastro = (values: any) => {
    Axios.post("https://localhost:8080/CadastroCliente", {
      username: values.username,
      password: values.password,
      userfirstname: values.userfirstname,
      usersecondname: values.usersecondname,
      email: values.email,
    })
  };
  const validationCadastro = Yup.object().shape({
    nome: Yup.string().required(),
    sobrenome: Yup.string().required(),
    nomeUsuario: Yup.string().required(),
    email: Yup.string().email("Não é um email").required(),
    password: Yup.string().min(8, "A senha deve ter no minimo 8 dígitos").required(),
    confirmaSenha: Yup.string().oneOf([Yup.ref("password"), null], "As senhas não são iguais"),
    

  })
  
    return (
      
      <Conteiner>
          <Leftsideconteiner>
              <Tittle>Login</Tittle>
              <Formik initialValues={{}}
              onSubmit = {handleClickLogin}
              validationSchema = {validationLogin}>

                <Form className='login-form'>
                  <Ldiv>
                    <Field name="email" className="form-field" placeholder = "Usuário"/>
                  </Ldiv>
                  <Ldiv>
                    <Field className="form-field" name= "password" placeholder = "Senha" type="password"/>
                  </Ldiv>
                    <Link>Esqueceu sua senha?</Link>
                    <Button type='submit'>Entrar</Button>
                </Form>
              </Formik>
              <Cinput>
              <FacebookOutlinedIcon fontSize="large" cursor='pointer'></FacebookOutlinedIcon>
              <Twitter fontSize='large' cursor='pointer'></Twitter>
              <Google fontSize='large'cursor='pointer'></Google>
              </Cinput>
            </Leftsideconteiner>
            <Rightsideconteiner>
                <Tittle>É Novo por aqui? <br></br>Faça seu Cadastro</Tittle>
                <Formik initialValues={{}}
                onSubmit = {handleClickCadastro}
                validationSchema = {validationCadastro}>
                  <Form className='login-form'>
                    <Ldiv>
                      <Field className="form-field" name= "nome" placeholder = "Nome" />
                    </Ldiv>
                    <Ldiv>
                      <Field className="form-field" name= "sobrenome" placeholder = "Sobrenome" />
                    </Ldiv>
                    <Ldiv>
                      <Field className="form-field" name= "nomeUsuario" placeholder = "Nome de usuário" />
                    </Ldiv>
                    <Ldiv>
                      <Field className="form-field" name= "email" placeholder = "Email" />
                    </Ldiv>
                    <Ldiv>
                      <Field className="form-field" name= "senha" placeholder = "Senha" type="password"/>
                    </Ldiv>
                    <Ldiv>
                      <Field className="form-field" name= "confirmaSenha" placeholder = "Confirme a Senha" type="password"/>
                    </Ldiv>
                      <Termo>Ao finalizar meu cadastro certifico que tenho 
                            mais de 18 anos de idade e aceito os Termos e 
                            Condições e a <b>Política de Privacidade</b>
                      </Termo>
                      <Button>Criar</Button>
                    </Form>
                </Formik>
            </Rightsideconteiner>
      </Conteiner>
    )
  }