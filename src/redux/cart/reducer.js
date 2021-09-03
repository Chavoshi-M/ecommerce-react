import {TOGGLE_CART_HIDDEN,ADD_TO_CART,REMOVE_FROM_CART} from './actionTypes'
import {addItemToCart, removeItemFromCart} from './utils'
const INITIAL_STATE = {
	hidden:null,
	cartItems:[]
}
const cartReducer = (state=INITIAL_STATE,action)=>{
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden:!state.hidden
			}
		case ADD_TO_CART:
			return {
				...state,
				cartItems:addItemToCart(state.cartItems,action.payload)
			}
		case REMOVE_FROM_CART:
			return {
				...state,
				cartItems:removeItemFromCart(state.cartItems,action.payload)
			}
		default:
			return state;
	}
}

export default cartReducer;