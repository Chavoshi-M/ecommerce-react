import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
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
					item.name
				))
			}
			<div className='total'>
				<span>Total : {props.total}</span>

			</div>
		</div>
	);
}
 
const mapStateToProps = createStructuredSelector({
	cartItems:selectCartItems,
	total:selectCartTotal
})
export default connect(mapStateToProps)(Checkout);