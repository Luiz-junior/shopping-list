import uuidv1 from 'uuid/v1';
import { createSelector } from 'reselect';

import { ADD_PRODUCT, DELETE_PRODUCT } from '../actions/types';

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
                    { ...action.product, total: getItemTotal(action.product), id: uuidv1() }
                ],
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.productId)
            }
        default:
            return state;
    }
};

function getItemTotal(product) {
    return product.price * product.quantity;
};

export const getListTotal = createSelector(
    state => state.list.items,
    items => items.reduce((total, item) => total + item.total, 0)
);