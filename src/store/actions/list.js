import { ADD_PRODUCT, DELETE_PRODUCT, TOGGLE_PRODUCT, UPDATE_PRODUCT } from './types';

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
    }),
    updateProduct: (product, list) => ({
        type: UPDATE_PRODUCT,
        product,
        list,
    })
}



