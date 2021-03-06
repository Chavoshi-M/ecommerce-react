import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CheckOutItems from '../../components/CheckoutItems/CheckoutItems'
import StripeButton from '../../components/StripeButton/StripeButton'
import {selectCartItems,selectCartTotal} from '../../redux/cart/selectors'
import './Checkout.scss'
const Checkout = (props) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>
						Product
					</span>
				</div>
				<div className='header-block'>
					<span>
						Description
					</span>
				</div>
				<div className='header-block'>
					<span>
						Quantity
					</span>
				</div>
				<div className='header-block'>
					<span>
						Price
					</span>
				</div>
				<div className='header-block'>
					<span>
						Remove
					</span>
				</div>
			</div>
			{
				props.cartItems.map(item=>(
					<CheckOutItems key={item.id} cartItem={item}/>
				))
			}
			<div className='total'>
				<span>Total : ${props.total}</span>

			</div>{/* 
			<div className='test-warning'>
				please use
			</div> */}
			<StripeButton price={props.total}/>
		</div>
	);
}
 
const mapStateToProps = createStructuredSelector({
	cartItems:selectCartItems,
	total:selectCartTotal
})
export default connect(mapStateToProps)(Checkout);