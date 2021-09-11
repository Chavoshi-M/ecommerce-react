import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionIsLoaded} from '../../redux/Shop/selectors';
import WithSpinner from '../../components/UI/WithSpinner/WithSpinner' 
import CollectionPage from "./CollectionPage";


const mapStateToProps = createStructuredSelector({
	isLoading:state=>!selectCollectionIsLoaded(state)
})

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage)

export default CollectionPageContainer;