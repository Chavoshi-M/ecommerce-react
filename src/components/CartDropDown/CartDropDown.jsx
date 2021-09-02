import Button from '../UI/Button/Button'
import './CartDropDown.scss' 
import {connect} from 'react-redux'
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../redux/cart/selectors'
const CartDropDown = (props) => {
	
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					props.cartItems.map(item=> <CartItem key={item.id} item={item}/>)
				}
			</div>
			<Button>Go To Checkout</Button>
		</div>
	);
}
const mapStetToProps = state=>({
	cartItems:selectCartItems(state)
})
 
export default connect(mapStetToProps)(CartDropDown);