import {TOGGLE_CART_HIDDEN,ADD_TO_CART,REMOVE_FROM_CART} from './actionTypes';
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