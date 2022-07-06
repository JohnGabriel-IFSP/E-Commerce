import {Container, Description, Information, Title, Wrapper} from "./style";

export function Info(){
    return(
        <Container>
            <Wrapper>
                <Description>
                    <Title>Sobre</Title>
                    <p>Página criada para aperfeiçoamente do conteúdo trabalhado em aula no curso de Pós-graduação Lato Sensu em Desenvolvimento Web oferecido pelo Instituto Federal São Paulo Campus Itapetininga</p>
                </Description>
                <Information>
                    <Title>Criadores</Title>
                    <p>Página desenvolvida pelos alunos:</p>
                    <p>John K S Gabriel</p>
                    <p>Jonathan Nunes de Proença</p>
                </Information>
            </Wrapper>
        </Container>
    )
}