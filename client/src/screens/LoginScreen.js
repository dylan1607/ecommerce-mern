import "./LoginScreen.css";
import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { error, user } = users;
  const [val, setVal] = useState({
    email: null,
    pwd: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const validationForm = () => {
    let returnData = {
      error: false,
      msg: "",
    };
    const vaild = /\S+@\S+\.\S+/;
    if (!vaild.test(val.email)) {
      returnData = {
        error: true,
        msg: "Invail Email",
      };
    }
    if (val?.pwd?.length < 1) {
      returnData = {
        error: true,
        msg: "Pwd must be greater than 8 characters",
      };
    }
    return returnData;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validation = validationForm();
    if (validation.error) {
      alert(validation.msg);
    } else {
      dispatch(loginUser(val));
    }
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="wrapper">
      <div className="login">
        <h2>LOGIN</h2>
        <form onSubmit={onSubmit} className="login__form">
          <input
            id="email"
            type="email"
            name="email"
            className="login__form-user"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            id="pwd"
            type="password"
            name="pwd"
            className="login__form-user"
            placeholder="Password"
            onChange={handleChange}
          />
          {users?.error && <p className="login__form--message">{error.data}</p>}
          <div className="login__form--btn">
            <button type="submit">Login</button>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
