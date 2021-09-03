import './Shop.scss'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
import {selectShopCollections} from '../../redux/Shop/selectors'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
const ShopPage = props=> {
	  
	return (
		<div className='shop-page'>
			{props.collections.map(({id,...collection})=>(
				<PreviewCollection  key={id} {...collection}/>
			))}
		</div>
	); 
}
const mapDispatchToProps = createStructuredSelector({
	collections:selectShopCollections
})
export default connect(mapDispatchToProps)(ShopPage);