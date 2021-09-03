import{connect} from 'react-redux'
import { removeFromCart } from '../../redux/cart/actions';
import './CheckoutItems.scss' 
const CheckOutItems = (props) => {
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={props.cartItem.imageUrl}/>
			</div>
			<span className='name'>
				 {props.cartItem.name}
			</span>
			<span className='quantity'>
				{props.cartItem.quantity}
			</span>
			<span className='price'>
				{props.cartItem.price}
			</span>
			<div className='remove-button' onClick={()=>props.removeItem(props.cartItem)}>
				&#10005;
			</div>
		</div>
	);
}
 
const mapDispatchToProps = dispatch=>({
	removeItem :item=>dispatch(removeFromCart(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItems);