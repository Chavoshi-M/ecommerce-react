import {SpinnerContainer,SpinnerOverlay} from './WithSpinner.styles'

const WithSpinner = WrappedComponent=>({isLoading,...otherProps})=>{
	console.log(otherProps,'otherPropsotherPropsotherPropsotherProps')
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer/>
		</SpinnerOverlay>
	):
	(<WrappedComponent {...otherProps}/>)
}
export default WithSpinner;