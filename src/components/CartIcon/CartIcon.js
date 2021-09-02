import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './CartIcon.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/actions'
import {selectCartItemsCount} from '../../redux/cart/selectors'
const CartIcon = (props) => {
	// const itemCounts = useSelector(state => state.cart.cartItems.reduce((accQuantity,cartitem)=>accQuantity+cartitem.quantity,0));
	return (
		<div className='cart-icon' onClick={props.toggleCartHidden}>
			<ShoppingIcon className='shopping-icon'/>
			<span className='item-count'>{props.itemCount}</span>
		</div>
	);
}
const mapDispatchToProps=(dispatch)=>({
	toggleCartHidden : ()=>dispatch(toggleCartHidden())
});
const mapStateToProps = state=>({
	itemCount : selectCartItemsCount(state)
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);