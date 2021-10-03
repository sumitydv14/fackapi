import { combineReducers } from "redux";
import { productReducers , selectedProductReducers, addToCart } from "./productReducers";



const reducers = combineReducers({
    productReducers,
   selectedProductReducers,
    cardItem :addToCart,
    
})

export  default reducers;