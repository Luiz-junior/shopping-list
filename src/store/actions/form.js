import { START_UPDATE } from './types';

export const Creators = {
    startUpdate: product => ({
        type: START_UPDATE,
        product,
    })
}