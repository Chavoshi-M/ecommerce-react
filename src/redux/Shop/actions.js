import { convertCollectionsSnapshotToMaps, firestore } from "../../firebase/firebase.utils";
import { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS } from "./actionType";

export const fetchCollectionsStart = ()=>({
	type:FETCH_COLLECTIONS_START 
})
/* export const fetchCollectionsStartAsync = ()=>{ 
	return dispatch=>{
		const CollectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart())
		CollectionRef.get().then(
			snapshot=>{
				const collectionMap = convertCollectionsSnapshotToMaps(snapshot); 
				dispatch(fetchCollectionsSuccess(collectionMap));
			}
		).catch(err=>{
			dispatch(fetchCollectionsFailure(err.message));
		})
	}
} */
export const fetchCollectionsSuccess = (collectionsMap)=>({
	type:FETCH_COLLECTIONS_SUCCESS,
	payload:collectionsMap
})
export const fetchCollectionsFailure = (err)=>({
	type:FETCH_COLLECTIONS_FAILURE,
	payload:err
})
