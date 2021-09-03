import './CheckoutItems.scss'
const CheckOutItems = (props) => {
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={props.imageUrl}/>
			</div>
			<span className='name'>
				 {props.name}
			</span>
			<span className='quantity'>
				{props.quantity}
			</span>
			<span className='price'>
				{props.price}
			</span>
			<div className='remove-button'>
				&#10005;
			</div>
		</div>
	);
}
 
export default CheckOutItems;