import StripeCheckout from 'react-stripe-checkout'
import { ReactComponent as Img } from '../../assets/crown.svg';
const StripeButton = ({price}) => {
	const priceForStripe = price * 100;
	const key = 'pk_test_51JVhdVHLh7OUu74tOXrg7pzXkAtCKR9ExxrBjDsI1UHCYVstj1dOgol2qxSCivaPVQCB9HVLgos6jQVoc8GgDkko00Er1IJNFy';
	const onToken = (token) => {
		alert('Payment Success')
	  }
	return (
		<StripeCheckout 
		label='Pay Now'
		name='Ecommerce Clothind Ltd'
		billingAddress
		shippingAddress
		image='https://svgshare.com/i/CUz.svg'
		description={`Your Total Price $${price}`}
		amount={priceForStripe}
		panelLabel='Pay Now'
		token={onToken}
		stripeKey={key}/>
	);
}
 
export default StripeButton;