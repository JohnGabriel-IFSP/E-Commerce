import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
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

const persistConfig  = {
    key: 'cart',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
const persistor = persistStore(store)

export {store, persistor};