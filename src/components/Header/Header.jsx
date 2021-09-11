import {connect} from 'react-redux';
import {ReactComponent as LOGO} from '../../assets/crown.svg';
import {selectCartHidden} from '../../redux/cart/selectors';
import {selectCurrrentUser} from '../../redux/user/selectors';
import {createStructuredSelector} from 'reselect'
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import {
	HeaderContainer,
	LogoContainer,
	OptionContainer,
	OptionNavLink,
	OptionLink
} from './Header.style'
import { signOutStart } from '../../redux/user/action'; 
const Header = ({currentUser,hidden,signOutStart}) => { 

	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<LOGO className='logo'/>
			</LogoContainer>
			<OptionContainer>
				<OptionNavLink  activeClassName='active' to='/shop'>
					Shop
				</OptionNavLink>
				<OptionNavLink activeClassName='active' to='/contact'>
					Contact
				</OptionNavLink>
				{
					currentUser ?
					<OptionNavLink as='div' onClick={signOutStart}>Sign Out</OptionNavLink>:
					<OptionLink to='signin'>Sign In</OptionLink>
				}
				<CartIcon/>
			</OptionContainer>
			{
				hidden && (<CartDropDown/>)
			}
			
		</HeaderContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser:selectCurrrentUser,
	hidden:selectCartHidden
})

const mapDispatchToProps = dispatch=>({
	signOutStart:()=>dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);