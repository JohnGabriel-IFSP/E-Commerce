import { ArrowDropDown, Facebook, Instagram, Twitter } from "@material-ui/icons";
import {Content, Container, Title, Wrapper, ShowContent } from "./style";
import { Toggle } from "./Toggle";

export function Footer(){
    return(
        <Wrapper>

            <Container>
                <Content>
                    <Title>Formas de Pagamento</Title>
                    <Toggle option={"payments"}></Toggle>
                </Content>
            </Container>

            <Container>
                <Content>
                    <Title>Midias Sociais</Title>
                    <Toggle option={"social"}></Toggle>
                </Content>
            </Container>

            <Container>
                <Content>
                    <Title>Sobre</Title>
                    <Toggle option="more"></Toggle>
                </Content>
            </Container>

        </Wrapper>
    )
}