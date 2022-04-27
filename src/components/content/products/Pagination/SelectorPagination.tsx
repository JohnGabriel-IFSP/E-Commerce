
export function SelectorPagination({itensPerPage,setItensPerPage}:any){
    return(
        <div>
            <span>Itens por página</span>
            <select value={itensPerPage} onChange={(e) => setItensPerPage(Number((e.target as HTMLSelectElement).value))}>
                <option value={16}>16</option>
                <option value={24}>24</option>
                <option value={32}>32</option>
                <option value={40}>40</option>
            </select>
        </div>
    )
}