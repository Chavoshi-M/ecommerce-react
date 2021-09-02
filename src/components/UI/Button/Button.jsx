import './Button.scss'
const Button = ({children,isGoogleButton,inverted,...props}) => {
	return (
		<button className={` ${inverted?'inverted':''}  ${isGoogleButton?'google-sign-in':''} custom-button `} {...props}>
			{children}
		</button>
	);
}
 
export default Button;