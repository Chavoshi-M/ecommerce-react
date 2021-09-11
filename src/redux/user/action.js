import { EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_SATRT, SIGN_IN_SUCCESS,  SIGN_IN_FAIL, CHECK_USER_SESSION, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAIL, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL} from './actionTypes';

export const googleSignInStart = ()=>({
	type:GOOGLE_SIGN_IN_SATRT
})
export const signInSuccess = (user)=>({
	type:SIGN_IN_SUCCESS,
	payload:user
}) 
export const emailSignInStart = (emailAndPass)=>({
	type:EMAIL_SIGN_IN_START,
	payload:emailAndPass
}) 
export const signOutStart = ()=>({
	type:SIGN_OUT_START 
}) 
export const signOutSuccess = ()=>({
	type:SIGN_OUT_SUCCESS 
}) 
export const signOutFail = (error)=>({
	type:SIGN_OUT_FAIL ,
	payload:error
}) 
export const signInFail = (error)=>({
	type:SIGN_IN_FAIL,
	payload:error
})
export const checkUserSession = (error)=>({
	type:CHECK_USER_SESSION 
})

// sign up
export const signUpStart = (userCredential)=>({
	type:SIGN_UP_START ,
	payload:userCredential
}) 
export const signUpSuccess = ({user,additionalData})=>({
	type:SIGN_UP_SUCCESS ,
	payload:{user,additionalData}
}) 
export const signUpFail = (error)=>({
	type:SIGN_UP_FAIL ,
	payload:error
}) 
