import {createSelector} from 'reselect';
const selectCart=state=>state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart)=>cart.cartItems
)
export const selectCartHidden = createSelector(
	[selectCart],
	(cart)=>cart.hidden
)
export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems=>cartItems.reduce((accQuantity,cartitem)=>accQuantity+cartitem.quantity*cartitem.price,0) 
)
export const selectCartItemsCount = createSelector([selectCartItems],
	cartItems=>cartItems.reduce((accQuantity,cartitem)=>accQuantity+cartitem.quantity,0) 
	)