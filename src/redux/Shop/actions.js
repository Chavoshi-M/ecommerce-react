import { UPDATE_COLLECTIONS } from "./actionType";

export const updateCollections = (collectionMap)=>({
	type:UPDATE_COLLECTIONS,
	payload:collectionMap
})