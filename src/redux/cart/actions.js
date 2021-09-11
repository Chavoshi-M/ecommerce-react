import {TOGGLE_CART_HIDDEN,ADD_TO_CART,REMOVE_FROM_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART} from './actionTypes';
export const toggleCartHidden = () => ({
	type:TOGGLE_CART_HIDDEN
});
export const addToCart = (item) => ({
	type:ADD_TO_CART,
	payload:item
});
export const removeFromCart = (item) => ({
	type:REMOVE_FROM_CART,
	payload:item
});
export const removeItremFromCart = (item) => ({
	type:REMOVE_ITEM_FROM_CART,
	payload:item
});
export const clearCart = () => ({
	type:CLEAR_CART
});