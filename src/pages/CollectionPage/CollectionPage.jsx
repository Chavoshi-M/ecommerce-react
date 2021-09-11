import { connect } from 'react-redux';
import { createSelectorCreator } from 'reselect';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { selectCollection } from '../../redux/Shop/selectors';

import './CollectionPage.scss';
const CollectionPage = (props) => {
	console.log(props,'collection-page Compnent')
	const {title,items} = props.collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map(item=><CollectionItem key={item.id} item={item}/>)}
			</div>
		</div>
	);
}
const mapStateToProps = (state,ownProps)=>({
	collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);