import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: "AIzaSyC2cToPyyndDAgTSAqfaa37bJL-WT-F3ac",
	authDomain: "food-4beda.firebaseapp.com",
	databaseURL: "https://food-4beda-default-rtdb.firebaseio.com",
	projectId: "food-4beda",
	storageBucket: "food-4beda.appspot.com",
	messagingSenderId: "681266883397",
	appId: "1:681266883397:web:9072666060a29d21c46c2c"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth,additionData)=>{
	if (!userAuth) {
		return;
	}
	const userRef = firestore.doc('users/'+userAuth.uid);
	const snapshot =await userRef.get();
	if (!snapshot.exists) {
		const {displayName,email} = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionData
			})
		} catch (error) {
			console.log('err creating user',error);
		}
	}
	return userRef;
}
export const convertCollectionsSnapshotToMaps =collections=>{
	const transformedCollections = collections.docs.map(doc=>{
		const {title,items} = doc.data();
		console.log(items,'.........');
		return{
			routeName:encodeURI(title.toLowerCase()),
			id:doc.id,
			title,
			items
		}
	}) 

	return transformedCollections.reduce((acc,collection)=>{
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	},{})
}

export const addCollectionAndDocs =async (collectionKey,data)=>{
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);
	const batch = firestore.batch();
	data.forEach(obj=>{
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef,obj);
		console.log(newDocRef);
	})
	return await batch.commit()
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promps:'select_account'});
export const signInWhithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;

