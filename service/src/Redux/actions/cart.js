export const OPEN_CART = 'OPEN_CART';
export const CLOSE_CART = 'CLOSE_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function openCart() {
    return {
        type: OPEN_CART
    }
}
export function closeCart() {
    return {
        type: CLOSE_CART
    }
}
export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    }
}
export function removeItem(index) {
    return {
        type: REMOVE_ITEM,
        index
    }
}