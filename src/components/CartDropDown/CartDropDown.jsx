import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import Button from '../UI/Button/Button'
import './CartDropDown.scss' 
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../redux/cart/selectors'
import {toggleCartHidden} from '../../redux/cart/actions'

const CartDropDown = (props) => {
	console.log(props.dispatch)
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
			<Button onClick={()=>{
				props.history.push('/checkout');
				props.dispatch(toggleCartHidden())
			}}>Go To Checkout</Button>
		</div>
	);
}
const mapStetToProps = state=>({
	cartItems:selectCartItems(state)
})
 
export default withRouter(connect(mapStetToProps)(CartDropDown));