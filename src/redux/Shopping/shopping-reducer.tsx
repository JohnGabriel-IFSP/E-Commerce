import * as actionsTypes from './shopping-types'

const INITIAL_STATE:any = {
    products: [],
    cart: [],
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type){
        case actionsTypes.addToCart:
            return {}
        case actionsTypes.removeFromCart:
            return {}
        case actionsTypes.adjustQuantity:
            return {}
        case actionsTypes.loadCurrentItem:
            return {}
        default:
            return state
    }
}

export default shopReducer;