import { takeLatest,put ,all,call} from "redux-saga/effects";
import { CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_SATRT, SIGN_OUT_START, SIGN_UP_START, SIGN_UP_SUCCESS } from "./actionTypes";
import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils'
import { 
	signUpFail,
	signUpStart,
	signUpSuccess,
	signInFail,
	signInSuccess,
	signOutSuccess,
	signOutFail } from "./action";

export function* getSnapShotFromUserAuth(userAuth,additionalData){
	try { 
		const userRef = yield call(createUserProfileDocument,userAuth,additionalData)
		const userSnaphot = yield userRef.get();
		yield put(signInSuccess({
			id:userSnaphot.id,...userSnaphot.data
		}))
	} catch (error) {
		yield put(signInFail({
			error
		})) 
	}
}
export function* signOut (){
	try {
		yield auth.signOut();
		yield put(signOutSuccess())
	} catch (error) {
		yield put(signOutFail(error))
		
	}
}
export function* onSignOutStart (){
	yield takeLatest(SIGN_OUT_START,signOut)
}
export function* SignInWithGoogle(){
	try {
		const {user} = yield auth.signInWithPopup(googleProvider);
		yield getSnapShotFromUserAuth(user);
	} catch (error) {
		yield put(signInFail({
			error
		})) 
	}
}
export function* SignInWithEmail({payload}){
	const {email,password} = payload;
	try {
		const {user} = yield auth.signInWithEmailAndPassword(email,password);
		yield getSnapShotFromUserAuth(user);
	} catch (error) {
		yield put(signInFail(error))
	}
}
export function* isUserAuth(){ 
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) {
			return
		}
		yield getSnapShotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFail(error))
	}
}

export function* onGoogleSignInStart (){
	yield takeLatest(GOOGLE_SIGN_IN_SATRT,SignInWithGoogle)
}
export function* onCheckUserSession (){
	yield takeLatest(CHECK_USER_SESSION,isUserAuth)
}

export function* onEmailSignInStart (){
	yield takeLatest(EMAIL_SIGN_IN_START,SignInWithEmail)
}
//sign up
export function* signUp ({payload:{email,password,displayName}}){
	try {
		const {user} = yield auth.createUserWithEmailAndPassword(email,password);
		yield put(signUpSuccess({user,additionalData:{displayName}}))
	} catch (error) {
		yield put(signUpFail(error))
	}
}
export function* onSignUpStart (){
	yield takeLatest(SIGN_UP_START,signUp)
}
export function* onSignUpSuccess (){
	yield takeLatest(SIGN_UP_SUCCESS,signInAfterSignUp)
}
export function* signInAfterSignUp ({payload:{user,additionalData}}){
	yield getSnapShotFromUserAuth(user,additionalData)
}


export function* userSagas (){
	yield all([
		call(isUserAuth),
		call(onEmailSignInStart),
		call(onGoogleSignInStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onSignOutStart),
	])
} 


