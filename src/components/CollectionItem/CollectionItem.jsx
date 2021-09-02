import './CollectionItem.scss'
import Button from '../UI/Button/Button'
import { addToCart } from '../../redux/cart/actions'; 
import { useDispatch } from 'react-redux';
const CollectionItem = ({item}) => {
	const {name,price,imageUrl}=item;
	const dispatch = useDispatch();
	return (
		<div className="collection-item">
			<div className="image"
				style={{
					backgroundImage:`url(${imageUrl})`
				}}
			/>
			<div className='collection-footer'>
				<span className='name'>
					{name}
				</span>
				<span className='price'>
					{price}
				</span>
			</div>
				<Button inverted onClick={()=>dispatch(addToCart(item))}>Add To Cart</Button>
		</div>
	);
}
 
export default CollectionItem;