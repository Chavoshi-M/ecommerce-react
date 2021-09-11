import { signUpFail } from './action'
import { SIGN_IN_FAIL, SIGN_IN_SUCCESS, SIGN_OUT_FAIL, SIGN_OUT_SUCCESS, SIGN_UP_FAIL} from './actionTypes'
const INITIAL_STATE = {
	error:null,
	currentUser:null
}
const userReducer = (state=INITIAL_STATE,action)=>{
	switch (action.type) { 
		case SIGN_IN_SUCCESS:
			return {
				...state,
				error:null,
				currentUser:action.payload
			} 
		case SIGN_OUT_SUCCESS:
			return {
				...state,
				error:null,
				currentUser:null
			} 
		case SIGN_OUT_FAIL:
		case SIGN_UP_FAIL:
		case SIGN_IN_FAIL:
			return {
				...state,
				error:action.payload
			}
		default:
			return state;
	}
}

export default userReducer;