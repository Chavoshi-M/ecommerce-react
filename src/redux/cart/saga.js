import {all,call,takeLatest,put} from 'redux-saga/effects'
import { SIGN_OUT_SUCCESS } from '../user/actionTypes'
import { clearCart } from './actions'

export function* clearCartOnSignOut (){
	yield put(clearCart())
}
export function* OnSignUotSuccess(){
	yield takeLatest(SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* cartSaga(){
	yield all([
		call(OnSignUotSuccess)
	])
}