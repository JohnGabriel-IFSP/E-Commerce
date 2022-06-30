import * as actionsTypes from './shopping-types'

const INITIAL_STATE:any = {
    products: [],
    cart: [],
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type){
        case actionsTypes.addToCart:
            const item = state.products.find((prod:any) => prod.id === action.payload.id)
            const inCart = state.cart.find((item:any) => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map((item:any) => item.id === action.payload.id ? {...item, Quantity: item.Quantity+1} : item) : [...state.cart, {...item, Quantity: 1}]
            }
        case actionsTypes.removeFromCart:
            return {
                ...state,
                cart: state.cart.filter((item:any) => item.id !== action.payload.id),
            }
        case actionsTypes.adjustQuantity:
            return {
                ...state,
                cart:state.cart.map((item:any) => item.id === action.payload.id ? {...item, Quantity: action.payload.Quantity} : item)
            }
        case actionsTypes.loadCurrentItem:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state
    }
}

export default shopReducer;