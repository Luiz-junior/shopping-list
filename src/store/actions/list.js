import { ADD_PRODUCT, DELETE_PRODUCT, TOGGLE_PRODUCT } from './types';

export const Creators = {
    addProduct: (product, list) => ({
        type: ADD_PRODUCT,
        product,
        list,
    }),
    deleteProduct: productId => ({
        type: DELETE_PRODUCT,
        productId,
    }),
    toggleProduct: productId => ({
        type: TOGGLE_PRODUCT,
        productId,
    })
}


