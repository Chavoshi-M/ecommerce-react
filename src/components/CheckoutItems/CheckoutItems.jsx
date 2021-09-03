import{connect} from 'react-redux'
import { addToCart, removeFromCart, removeItremFromCart } from '../../redux/cart/actions';
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
				<div className='arrow' onClick={()=>props.removeItremFromCart(props.cartItem)}>&#10094;</div>
				<span className='value'>
					{props.cartItem.quantity}
				</span>
				<div className='arrow' onClick={()=>props.addItremToCart(props.cartItem)}>&#10095;</div>
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
	removeItem :item=>dispatch(removeFromCart(item)),
	removeItremFromCart:item=>dispatch(removeItremFromCart(item)),
	addItremToCart:item=>dispatch(addToCart(item)),

})
export default connect(null,mapDispatchToProps)(CheckOutItems);