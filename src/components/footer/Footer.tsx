import { ArrowDropDown, Facebook, Instagram, Twitter } from "@material-ui/icons";
import {Content, Container, Title, Wrapper} from "./style";
import { Toggle } from "./toggle/Toggle";


export function Footer(){
    return(
        <Wrapper>

            <Container>
                <Content>
                    <Title>Formas de Pagamento</Title>
                    <Toggle option={"payments"}/>
                </Content>
            </Container>

            <Container>
                <Content>
                    <Title>Midias Sociais</Title>
                    <Toggle option={"social"}/>
                </Content>
            </Container>

            <Container>
                <Content>
                    <Title>Saiba Mais</Title>
                    <Toggle option="more"/>
                </Content>
            </Container>

        </Wrapper>
    )
}