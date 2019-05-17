import uuidv1 from 'uuid/v1';
import { createSelector } from 'reselect';

import { ADD_PRODUCT, DELETE_PRODUCT, TOGGLE_PRODUCT } from '../actions/types';

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
                    {
                        ...action.product,
                        total: getItemTotal(action.product),
                        id: uuidv1(),
                        checked: false,
                    }
                ],
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.productId)
            }
        case TOGGLE_PRODUCT:
            return {
                ...state,
                items: toggleItem(state.items, action.productId),
            }
        default:
            return state;
    }
};

function getItemTotal(product) {
    return product.price * product.quantity;
};

// helpers
export const getListTotal = createSelector(
    state => state.list.items,
    items => items.reduce((total, item) => total + item.total, 0)
);

function toggleItem(items, productId) {
    const index = items.findIndex(item => item.id === productId);
    return [
        ...items.slice(0, index), // todos os items antes do item a ser modificado
        { ...items[index], checked: !items[index].checked }, // item atualizado
        ...items.slice(index + 1), // todos os items depois do item a ser modificado
    ];
};

// selectors

export const getOpenedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => !item.checked).length,
);

export const getClosedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => item.checked).length,
);