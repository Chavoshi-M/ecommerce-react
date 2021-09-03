import './Shop.scss' 
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = props=> { 
	console.log(props)
	return (
		<div className='shop-page'>
			<Route exact path={`${props.match.path}`} component={CollectionOverview}/>
			<Route path={`${props.match.path}/:collectionId`} component={CollectionPage}/>
		</div>
	); 
} 
export default ShopPage;