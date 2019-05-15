import { ADD_PRODUCT } from '../actions/types';

const initialState = {
    list: null,
    items: []
};

export default function list(state, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return { list: action.list, items: [...state.items, action.product] }
        default:
            return state;
    }
};