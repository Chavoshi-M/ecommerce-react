
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CollectionOverview.scss'
import {selectShopCollections} from '../../redux/Shop/selectors'
import PreviewCollection from '../PreviewCollection/PreviewCollection';

const CollectionOverview = (props) => {
	return (
		<div className='collection-overview'>
			{props.collections.map(({id,...collection})=>(
				<PreviewCollection  key={id} {...collection}/>
			))}
		</div>
	);
}
const mapDispatchToProps = createStructuredSelector({
	collections:selectShopCollections
})
export default connect(mapDispatchToProps)(CollectionOverview);