import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-left: 35px;
    padding: 10px;
    gap: 10px;

    @media(min-width: 46em){
        margin-left: 110px;
    }
`;

export function SelectorPagination({itensPerPage,setItensPerPage}:any){
    return(
        <Container>
            <span>Itens por página</span>
            <select value={itensPerPage} onChange={(e) => setItensPerPage(Number((e.target as HTMLSelectElement).value))}>
                <option value={15}>15</option>
                <option value={30}>30</option>
                <option value={45}>45</option>
                <option value={60}>60</option>
            </select>
        </Container>
    )
}