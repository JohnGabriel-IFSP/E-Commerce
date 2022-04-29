import { Cards } from "./Cards";
import productsContent from "./productsContent";
import { CardsContainer, Container } from "./style"

export function Products(){
    return(
        <Container>
            <CardsContainer>
                <Cards productsContent={productsContent}/>
            </CardsContainer>
        </Container> 
    );
}