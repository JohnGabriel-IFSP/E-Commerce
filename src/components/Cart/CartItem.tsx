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
                <Image src={itemData.imageUrl}/>
                <Details>
                <ProductName><b>Produto:</b> {itemData.name} </ProductName>
                <ProductId><b>ID:</b>{itemData.product}</ProductId>
                <ProductColor color={itemData.color}/>
                <ProductSize><b>Tamanho: </b>{itemData.size}</ProductSize>
                </Details>
            </ProductDetail>
            <ProductPrice>
                <ProductAmountConteiner>
                    <Remove cursor='pointer' onClick={()=>{setInput(input>1 ? input-1 : input)}}/>
                    <ProductAmount>
                        <input min='1' type='number' id="qty" name="qty" value={input} onChange = {onChangeHandler}></input>
                    </ProductAmount>
                    <Add cursor='pointer' onClick={()=>{setInput(input<itemData.countInStock ? input+1 : input)}}/>
                </ProductAmountConteiner>
                <ProductPriceDetail>{itemData.price}</ProductPriceDetail>
            </ProductPrice>
        </Product>
    )
}
