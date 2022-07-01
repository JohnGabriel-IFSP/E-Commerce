import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//Reducers
import { cartReducer } from './Shopping/reducers/cartReducer'
import { getProductDetailsReducer, getProductsReducer } from './Shopping/reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
})
const middleware = [thunk];
const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;