import { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from "./actionType";

const INITIAL_STATE = {
	collections: null,
	isFetching:false,
	error:''
} 
const shopReducer = (state=INITIAL_STATE,action)=>{
	switch (action.type) {
		case FETCH_COLLECTIONS_START:
			return{
				...state,
				isFetching:true
			}
		case FETCH_COLLECTIONS_SUCCESS:
			return{
				...state,
				collections:action.payload,
				isFetching:false
			} 
		case FETCH_COLLECTIONS_FAILURE:
			return{
				...state,
				isFetching:false,
				error:action.payload
			} 
		default:
			return state;
	}
}


export default shopReducer;