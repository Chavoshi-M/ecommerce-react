import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCollectionFetching}from '../../redux/Shop/selectors'
import CollectionOverview from "./CollectionOverview";
import WithSpinner from '../UI/WithSpinner/WithSpinner' 
import { compose } from "redux";
const mapStateToProps = createStructuredSelector({
	isLoading:selectCollectionFetching
})

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
	
)(CollectionOverview)

export default CollectionOverviewContainer;