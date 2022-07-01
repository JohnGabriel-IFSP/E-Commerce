import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import { Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, ProductPrice, ProductAmountConteiner, ProductAmount, ProductPriceDetail } from "./CartStyle";


export const CartItem = ({itemData , removeFromCart, adjustQuantity}:any) => {

    const [input, setInput] = useState(itemData.qty);

    const onChangeHandler = (e:any) =>{
        setInput(e.target.value);
        adjustQuantity(itemData._id, e.target.value)
    }
    return (
        <Product>
            <ProductDetail>
                <Image src={itemData.image}/>
                <Details>
                <ProductName><b>Produto:</b> {itemData.productName} </ProductName>
                <ProductId><b>ID:</b>{itemData._id}</ProductId>
                <ProductColor color={itemData.color}/>
                <ProductSize><b>Tamanho: </b>{itemData.size}</ProductSize>
                </Details>
            </ProductDetail>
            <ProductPrice>
                <ProductAmountConteiner>
                    <Add cursor='pointer'/>
                    <ProductAmount>
                        <input min='1' type='number' id="qty" name="qty" value={input} onChange = {onChangeHandler}></input>
                    </ProductAmount>
                    <Remove cursor='pointer'/>
                </ProductAmountConteiner>
                <ProductPriceDetail>{itemData.price}</ProductPriceDetail>
            </ProductPrice>
        </Product>
    )
}
