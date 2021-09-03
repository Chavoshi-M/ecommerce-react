import { createSelector } from 'reselect';

const selectShop = state=>state.shop;
export  const  selectShopCollections = createSelector(
	[selectShop],
	shop=>shop.collections
)

export const selectCollection = collectionUrlParam=>
	createSelector(
	[selectShopCollections],
	collections=>{
		console.log(collectionUrlParam,'collectionUrlParam');
		console.log(collections,'collections');
		return collections[collectionUrlParam]
	}
)
export const selectCollectionForPreview = createSelector(
	[selectShopCollections],
	collections=>Object.keys(collections).map(key=>collections[key])
)