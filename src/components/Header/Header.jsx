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
const Header = ({currentUser,hidden}) => { 

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
					<OptionNavLink as='div' onClick={()=>auth.signOut()}>Sign Out</OptionNavLink>:
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

export default connect(mapStateToProps)(Header);