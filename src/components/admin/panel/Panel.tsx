import { useState } from "react";
import { CreateProduct } from "./CreateProduct";
import { OptionBar } from "./OptionBar";
import { SearchOrder } from "./SearchOrder";
import { Container, SideBar } from "./style";
import { UpdateProduct } from "./UpdateProduto";

export function Panel(){
    const [current, setCurrent] = useState(1);
    return(
        <>
            <SideBar>
                <OptionBar setCurrent={(current:any) => {setCurrent(current)}}></OptionBar>
            </SideBar>
            <Container>
                <CreateProduct current={current === 1 ? true : false}></CreateProduct>
                <UpdateProduct current={current === 2 ? true : false}></UpdateProduct>
                <SearchOrder current={current === 3 ? true : false}></SearchOrder>
            </Container>
        </>
    );
}