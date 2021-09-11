import { Component } from 'react';
import './Shop.scss'  
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/Shop/actions';
import { selectCollectionIsLoaded} from '../../redux/Shop/selectors';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview.container';
class ShopPage extends Component { 
	
	componentDidMount(){
		this.props.fetchCollectionsStartAsync()
	}	
	render(){
		const {match} = this.props; 
		return (
			<div className='shop-page'>
				<Route 
					exact 
					path={`${match.path}`} 
					component={CollectionOverviewContainer}/>
				<Route 
					path={`${match.path}/:collectionId`}  
					component={CollectionPageContainer}/>
			</div>
		);
	}
} 
 
const mapDispatchToProps = disatch=>({
	fetchCollectionsStartAsync:()=>disatch(fetchCollectionsStart()) 
})
export default connect(null,mapDispatchToProps)(ShopPage);