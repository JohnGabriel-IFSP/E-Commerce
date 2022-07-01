import * as actionTypes from '../constants/productsConstants'
import axios from 'axios';

export const getProducts = () => async (dispatch:any) => {
    try{
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST});

        const { data } = await axios.get(`http://localhost:8080/Products`);

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(error:any){
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const getProductDetails = (id:any) => async (dispatch:any) => {
    try{
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});

        const { data } = await axios.get(`http://localhost:8080/Products${id}`);

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }catch(error:any){
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const removeProductRemoveDetails = () => (dispatch:any) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET,
    })
}