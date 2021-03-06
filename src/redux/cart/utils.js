export const addItemToCart = (cartItems,item)=>{
	const existingItem = cartItems.find(cartitem => cartitem.id === item.id);
	if (existingItem) {
		return cartItems.map(itm=>
			itm.id === item.id?{...itm,quantity:itm.quantity+1}:itm
		)
	}
	return [...cartItems,{...item,quantity:1}];
}
export const removeFromCart = (cartItems,item)=>{
	const filteredItems = cartItems.filter(cartitem => cartitem.id !== item.id); 
	return filteredItems;
}
export const removeItemFromCart = (cartItems,item)=>{
	const existingItem = cartItems.find(cartitem => cartitem.id === item.id);
	if (existingItem.quantity === 1) {
		return cartItems.filter(cartitem => cartitem.id !== item.id); 
	}
	return cartItems.map(itm=>
		itm.id === item.id?{...itm,quantity:itm.quantity-1}:itm
	) 
}