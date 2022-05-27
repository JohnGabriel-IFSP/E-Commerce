import { useState } from "react";
import { CreateProduct } from "./CreateProduct";
import { OptionBar } from "./OptionBar";
import { SearchOrder } from "./SearchOrder";
import { Container } from "./style";
import { UpdateProduct } from "./UpdateProduto";

export function Panel(){
    const [current, setCurrent] = useState(true);
    const [index, setIndex] = useState(1);
    return(
        <Container>
            <OptionBar setCurrent={(current:any) => {setCurrent(true), setIndex(current)}}></OptionBar>
            <CreateProduct current={index === 1 ? current : false}></CreateProduct>
            <UpdateProduct current={index === 2 ? current : false}></UpdateProduct>
            <SearchOrder current={index === 3 ? current : false}></SearchOrder>
        </Container>
    );
}