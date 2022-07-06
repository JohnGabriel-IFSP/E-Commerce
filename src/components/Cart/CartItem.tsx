import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import { Amount } from "../pageProduct/productStyle";
import { Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, ProductPrice, ProductAmountConteiner, ProductAmount, ProductPriceDetail } from "./CartStyle";

export const CartItem = ({item , removeHandler, qtyChangeHandler}:any) => {

    const [input, setInput] = useState(item.qty);

    return (
        <Product>
            <ProductDetail>
                <Image src={item.imageUrl}/>
                <Details>
                <ProductName><b>Produto:</b> {item.name} </ProductName>
                <ProductId><b>ID:</b>{item.product}</ProductId>
                <ProductColor color={item.color}/>
                <ProductSize><b>Tamanho: </b>{item.size}</ProductSize>
                </Details>
            </ProductDetail>
            <ProductPrice>
                <ProductAmountConteiner>
                    <Remove cursor='pointer' onClick={()=>{item.qty === 1 ? removeHandler(item.product) : qtyChangeHandler(item.product, item.qty - 1) ? setInput(item.qty) : input}}/>
                    <ProductAmount>
                        <Amount>
                            {item.qty}
                        </Amount>
                    </ProductAmount>
                    <Add cursor='pointer' onClick={()=>{item.qty < item.countInStock ? qtyChangeHandler(item.product, item.qty + 1) ? setInput(item.qty) : input : input}}/>
                </ProductAmountConteiner>
                <ProductPriceDetail>{item.price}</ProductPriceDetail>
            </ProductPrice>
        </Product>
    )
}