import { START_UPDATE } from '../actions/types';

const initialState = {
    action: 'new',
    productToUpdate: {},
};

export const form = (state = initialState, action) => {
    switch (action.type) {
        case START_UPDATE:
            return {
                action: 'update',
                productToUpdate: action.product,
            }
        default:
            return state;
    }
};