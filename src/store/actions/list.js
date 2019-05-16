import { ADD_PRODUCT, DELETE_PRODUCT } from './types';

export const Creators = {
    addProduct: (product, list) => ({
        type: ADD_PRODUCT,
        product,
        list,
    }),
    deleteProduct: productId => ({
        type: DELETE_PRODUCT,
        productId,
    })
}


