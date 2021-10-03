import { ActionType } from "../constants/action-type";

const initialState = {
    products:[],
};

export const productReducers = (state= initialState , {type, payload}) => {
    switch(type){
        case  ActionType.SET_PRODUCTS:
            return {...state , products:payload}

        default:
            return state;
    }
}


export const selectedProductReducers = (state={} , {type , payload}) =>{
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state , ...payload}
            case ActionType.REMOVE_SELECTED_PRODUCT:
                return {}
        default:
           return  state;
    }
}

export const addToCart = (state = initialState , {type , payload} ) =>{
    console.log('cart');
    switch (type) {
        case ActionType.ADD_TO_CART:
            console.log('cart')
            return{ ...state  , product:payload }
        default:
            return state;
    }
}





