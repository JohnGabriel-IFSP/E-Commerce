import { Cards } from "./Cards";
import { Container } from "./style";
import { Pagination } from "./Pagination/Pagination";
import { useEffect, useState } from "react";
import { SelectorPagination } from "./Pagination/SelectorPagination";
import { OrderItens } from "./Pagination/OrderItens";
import { useParams } from "react-router-dom";

export function Products(){
    const { name } = useParams();
    const [itens, setItens] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(itens.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = itens.slice(startIndex,endIndex);

    let url='https://api-rest-us.herokuapp.com';
    switch(name){
        case 'all':
            url = `${url}/Products`
            break;
        case 'category1':
            url = `${url}/Products/searchByCategory/category 1`
            break;
        case 'category2':
            url = `${url}/Products/searchByCategory/category 2`
            break;
        case 'category3':
            url = `${url}/Products/searchByCategory/category 3`
            break;
        default:
            url = `${url}/Products/searchByName/${name}`
    }
    
    useEffect(()=>{
        const fetchData = async () => {
            const Data = await fetch(url)
                .then(response => response.json())
                .then(data => data)
            setItens(Data)
        }
        fetchData()
    }, [])

    useEffect(()=>{
        setCurrentPage(0)
    }, [itensPerPage])

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [currentPage])

    return(
            <Container>
                <OrderItens></OrderItens>
                <Cards productsContent={currentItens}/>
                <SelectorPagination itensPerPage={itensPerPage} setItensPerPage={setItensPerPage}></SelectorPagination>
                <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
            </Container>
    );
}