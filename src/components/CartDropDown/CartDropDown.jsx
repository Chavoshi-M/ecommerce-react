import Button from '../UI/Button/Button'
import './CartDropDown.scss'
const CartDropDown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<Button>Go To Checkout</Button>
		</div>
	);
}
 
export default CartDropDown;