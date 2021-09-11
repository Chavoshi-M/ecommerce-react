import {call,put, takeLatest,all} from 'redux-saga/effects';
import { convertCollectionsSnapshotToMaps, firestore } from '../../firebase/firebase.utils';

import { fetchCollectionsFailure, fetchCollectionsSuccess } from './actions'
import { FETCH_COLLECTIONS_START } from './actionType';

export function* fetchCollectionAsync(){
	yield console.log('I am Fired');
	try {
		const CollectionRef = firestore.collection('collections');
		const snapShot = yield CollectionRef.get();
		const collectionMap =  yield call(convertCollectionsSnapshotToMaps,snapShot);
		yield put(fetchCollectionsSuccess(collectionMap))
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message))	
	}
}

export function* fetchCollectionStart(){
	yield takeLatest(FETCH_COLLECTIONS_START,fetchCollectionAsync);
}

export function* shopSaga(){
	yield all([
		call(fetchCollectionStart)
	])
}