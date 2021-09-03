import {combineReducers} from 'redux'
import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import directoryReducer from './Directory/reducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
	key:'root',
	storage,
	whitelist:[
		'cart'
	]
}
const rootReducer = combineReducers({
	cart:cartReducer,
	directory:directoryReducer,
	user:userReducer
})
export default persistReducer(persistConfig,rootReducer)