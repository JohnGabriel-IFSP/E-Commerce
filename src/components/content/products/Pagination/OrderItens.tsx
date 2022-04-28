import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    margin-right: 30px;
    gap: 10px;
`;

export function OrderItens(){
    return(
        <Container>
            <span>Ordenar por:</span>
            <select>
                <option value={'menor'}>Menor Preço</option>
                <option value={'maior'}>Maior Preço</option>
                <option value={'relevante'}>Mais Relevantes</option>
            </select>
        </Container>
    )
}