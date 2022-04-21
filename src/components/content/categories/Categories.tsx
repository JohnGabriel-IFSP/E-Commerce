import { Cards } from "./Cards";
import categoriesContent from "./categoriesContent";
import { CardsContainer, Container } from "./style"

export function Categories(){
    return(
        <Container>
            <CardsContainer>
                <Cards categoriesContent = { categoriesContent}/>
            </CardsContainer>
        </Container>
    )
}