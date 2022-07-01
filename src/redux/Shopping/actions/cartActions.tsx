import * as actionsTypes from '../constants/cartConstants';

import axios from 'axios';

export const addToCart = (id:string, qty:number) => async (dispatch:any, getState:any) => {
    const {data} = await axios.get(`http://localhost:8080/Products/${id}`);

    dispatch({
        type: actionsTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.productName,
            category: data.category,
            size: data.size,
            imageUrl: data.imgs[0].url,
            description: data.description,
            color: data.color,
            price: data.price,
            countInStock: data.inventory,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id:any) => ({dispatch, getState}:any) => {
    dispatch({
        type: actionsTypes.REMOVE_FROM_CART,
        payload: id
    })
    
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems));
}