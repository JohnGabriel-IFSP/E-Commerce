import productsContent from "./productsContent";
import { Cards } from "./Cards";
import { Container } from "./style";

export function Products(){
    return(
            <Container>
                <Cards productsContent={productsContent}/>
            </Container>
    );
}