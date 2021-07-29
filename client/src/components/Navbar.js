import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ({click}) => {
    return (
        <nav className='navbar'>
            {/* Logo */}
                <div className='navbar__logo'>
                    <Link to='/'>
                        <h2>E-Commerce</h2>
                    </Link>
                </div>
            {/* Links */}
                <ul className='navbar__links'>
                    <li>
                        <Link to="/cart" className='cart__link'>
                            {/* Icon */}
                            <i className='fas fa-shopping-cart'></i>
                            <span>
                                Cart
                                <span className='cartlogo__badge'>0</span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Shop
                        </Link>
                    </li>
                </ul>
            {/* Hamburger Menu */}
            <div className='hamburger__menu' onClick={click}>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </nav>
    )
}

export default Navbar;