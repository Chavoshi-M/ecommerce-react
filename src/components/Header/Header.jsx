import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import {connect} from 'react-redux'
import {ReactComponent as LOGO} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown';
const Header = ({currentUser,hidden}) => { 

	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<LOGO className='logo'/>
			</Link>
			<div className='options'>
				<NavLink activeClassName='active' className='option' to='/shop'>
					Shop
				</NavLink>
				<NavLink activeClassName='active' className='option' to='/contact'>
					Contact
				</NavLink>
				{
					currentUser ?
					<div className='option' onClick={()=>auth.signOut()}>Sign Out</div>:
					<Link className='option' to='signin'>Sign In</Link>
				}
				<CartIcon/>
			</div>
			{
				hidden && (<CartDropDown/>)
			}
			
		</div>
	);
}

const mapStateToProps = (state) => ({
	currentUser:state.user.currentUser,
	hidden:state.cart.hidden
})

export default connect(mapStateToProps)(Header);