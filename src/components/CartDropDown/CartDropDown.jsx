import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import Button from '../UI/Button/Button'
import './CartDropDown.scss' 
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../redux/cart/selectors'
const CartDropDown = (props) => {
	
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					props.cartItems.length?
					props.cartItems.map(item=> <CartItem key={item.id} item={item}/>):
					(<span className='empty-message'>
						Your Cart Is Empty
					</span>)
				}
			</div>
			<Button onClick={()=>props.history.push('/checkout')}>Go To Checkout</Button>
		</div>
	);
}
const mapStetToProps = state=>({
	cartItems:selectCartItems(state)
})
 
export default withRouter(connect(mapStetToProps)(CartDropDown));