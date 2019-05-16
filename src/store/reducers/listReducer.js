import { ADD_PRODUCT } from '../actions/types';

const initialState = {
    list: null,
    items: []
};

export default function list(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return { 
                list: action.list,
                items: [
                    ...state.items,
                    { ...action.product, total: getItemTotal(action.product) }
                ],
            }
        default:
            return state;
    }
};

function getItemTotal(product) {
    return product.price * product.quantity; 
};