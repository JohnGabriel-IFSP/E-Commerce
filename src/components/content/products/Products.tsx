import { Cards } from "./Cards";
import { Container } from "./style";
import { Pagination } from "./Pagination/Pagination";
import { useEffect, useState } from "react";
import { SelectorPagination } from "./Pagination/SelectorPagination";

export function Products(){
    const [itens, setItens] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(16);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = itens.slice(startIndex,endIndex);

    useEffect(()=>{
        const fetchData = async () => {
            const Data = await fetch('src/components/content/products/productsContent.json')
                .then(response => response.json())
                .then(data => data)

            setItens(Data)
        }
        fetchData()
    }, [])

    useEffect(()=>{
        setCurrentPage(0)
    }, [itensPerPage])

    return(
            <Container>
                <SelectorPagination itensPerPage={itensPerPage} setItensPerPage={setItensPerPage}></SelectorPagination>
                <Cards productsContent={currentItens}/>
                <Pagination pages={pages} setCurrentPage={setCurrentPage}></Pagination>
            </Container>
    );
}