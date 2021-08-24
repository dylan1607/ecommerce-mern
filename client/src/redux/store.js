import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

const middeware = [thunk];

// const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// const initialState = {
//     cart: {
//         cartItems: cartFromLocalStorage,
//     }
// };

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middeware))
);

export default store;