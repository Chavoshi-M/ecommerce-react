import {TOGGLE_CART_HIDDEN} from './actionTypes'
const INITIAL_STATE = {
	hidden:null
}
const cartReducer = (state=INITIAL_STATE,action)=>{
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden:!state.hidden
			}
		default:
			return state;
	}
}

export default cartReducer;