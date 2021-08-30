import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { user, error } = users;
  const logoutHandle = () => {
    dispatch(logoutUser());
  };
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart" className="sidedrawer__cartlink">
            {/* Icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidedrawer__badge">{getCartCount()}</span>
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
    </div>
  );
};

export default SideDrawer;
