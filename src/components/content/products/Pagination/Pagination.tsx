
export function Pagination({pages,setCurrentPage}:any){
    return(
        <>
            <div>{Array.from(Array(pages), (item, index) => {
                        return <button value={index} onClick={(e) => setCurrentPage(Number((e.target as HTMLButtonElement).value))}>{index+1}</button>})}
            </div>
        </>
    )
}