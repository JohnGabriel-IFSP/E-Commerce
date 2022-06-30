import * as actionTypes from './shopping-types'

export const addToCart = (itemID:any) => {
    return {
        type: actionTypes.addToCart,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID:any) => {
    return {
        type: actionTypes.removeFromCart,
        payload: {
            id: itemID
        }
    }
}

export const adjustQuantity = (itemID:any, value:any) => {
    return {
        type: actionTypes.adjustQuantity,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item:any) => {
    return {
        type: actionTypes.loadCurrentItem,
        payload: item,
    }
}