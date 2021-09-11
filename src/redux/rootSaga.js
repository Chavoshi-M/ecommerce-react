import {all,call} from 'redux-saga/effects'
import { cartSaga } from './cart/saga'
import {fetchCollectionStart, shopSaga} from './Shop/saga'
import { userSagas } from './user/saga'
 
export default function* rootSaga (){
	yield all([
		call(fetchCollectionStart),
		call(shopSaga), 
		call(userSagas),
		call(cartSaga)
	])
}