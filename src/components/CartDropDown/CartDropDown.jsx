import Button from '../UI/Button/Button'
import './CartDropDown.scss'
import {useSelector} from 'react-redux'
import CartItem from '../CartItem/CartItem'
const CartDropDown = () => {
	const cartItems = useSelector(state => state.cart.cartItems)
	console.log('cartItems',cartItems)
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					cartItems.map(item=> <CartItem key={item.id} item={item}/>)
				}
			</div>
			<Button>Go To Checkout</Button>
		</div>
	);
}
 
export default CartDropDown;