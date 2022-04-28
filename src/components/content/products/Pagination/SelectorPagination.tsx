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
                <option value={16}>16</option>
                <option value={24}>24</option>
                <option value={32}>32</option>
                <option value={40}>40</option>
            </select>
        </Container>
    )
}