import { ADD_PRODUCT } from './types';

export const Creators = {
    addProduct: (product, list) => ({
        type: ADD_PRODUCT,
        product,
        list,
    })
}


