import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import {ReactComponent as LOGO} from '../../assets/crown.svg'
const Header = () => {
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
			</div>
		</div>
	);
}
 
export default Header;