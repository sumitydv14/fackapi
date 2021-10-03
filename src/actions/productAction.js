import { ActionType } from "../constants/action-type";
import { cardItem } from "../reducers/productReducers";
export const setProducts = (Products) => {
     return {
         type:ActionType.SET_PRODUCTS,
         payload:Products,
     };
};


export const selectedProduct = (Products) => {
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:Products,
    };
};

export const removeselectedProduct = () => {
    return {
        type:ActionType.REMOVE_SELECTED_PRODUCT,
        
    };
};


export const addToCart = (cardItem) => {
      return{
          type:ActionType.ADD_TO_CART,
          payload:cardItem,
      }
}

