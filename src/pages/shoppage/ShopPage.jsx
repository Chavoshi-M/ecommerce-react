import { Component } from 'react';
import './Shop.scss' 
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage';
import {firestore,convertCollectionsSnapshotToMaps} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/Shop/actions';
import WithSpinner from '../../components/UI/WithSpinner/WithSpinner';
const CollectionOverviewSpinner = WithSpinner(CollectionOverview)
const CollectionPageSpinner = WithSpinner(CollectionPage)
class ShopPage extends Component { 
	state = {
		loading:true
	};
	unSubscribeFromSnapshot = null;
	componentDidMount(){
		const {updateCollections} = this.props;
		const CollectionRef = firestore.collection('collections');
		CollectionRef.get().then(
			snapshot=>{
				const collectionMap = convertCollectionsSnapshotToMaps(snapshot);
				updateCollections(collectionMap)
				this.setState({loading:false})
			}
		) 
	}	
	render(){
		const {match} = this.props;
		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} render={(props)=><CollectionOverviewSpinner isLoading={this.state.loading} {...props}/>}/>
				<Route path={`${match.path}/:collectionId`}  render={(props)=><CollectionPageSpinner isLoading={this.state.loading} {...props}/>}/>
			</div>
		);
	}
} 

const mapDispatchToProps = disatch=>({
	updateCollections:collectionMap=>{
		disatch(updateCollections(collectionMap))
	}
})
export default connect(null,mapDispatchToProps)(ShopPage);