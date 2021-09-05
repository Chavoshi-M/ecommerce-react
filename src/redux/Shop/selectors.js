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
		return collections? collections[collectionUrlParam]:null
	}
)
export const selectCollectionForPreview = createSelector(
	[selectShopCollections],
	collections=>collections?Object.keys(collections).map(key=>collections[key]):[]
)