import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const users = useSelector((state) => state.users);
  const { user, error } = users;
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(logoutUser());
  };
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <Link to="/">
          <h2>E-Commerce</h2>
        </Link>
      </div>
      {/* Links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            {/* Icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          {!user?.isLogin ? (
            <Link to="/login">
              <i className="fas fa-user"></i>
              <span>Login</span>
            </Link>
          ) : (
            <Link onClick={logoutHandle}>
              <i className="fas fa-user"></i>
              <span>Logout</span>
            </Link>
          )}
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div className="hamburger__menu" onClick={click}>
        <div> </div>
        <div> </div>
        <div> </div>
      </div>
    </nav>
  );
};

export default Navbar;
