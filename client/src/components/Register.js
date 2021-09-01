import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/userActions";


const Register = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { user, error } = users;
  const [input, setInput] = useState({ name: null, email: null, pwd: null });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const validationForm = () => {
    let returnData = {
      err: false,
      msg: null,
    };
    const vaild = /\S+@\S+\.\S+/;
    if (!vaild.test(input.email)) {
      returnData = {
        error: true,
        msg: "Invail Email",
      };
    }
    if (input?.pwd?.length < 1) {
      returnData = {
        error: true,
        msg: "Password must be greater than 8 characters",
      };
    }
    return returnData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validationForm();
    if (validation.error) {
      alert(validation.msg);
    } else {
      dispatch(registerUser(input));
    
    }
  };
  return (
    <div className="wrapper">
      <div className="register">
        <h2>REGISTER</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Fullname"
            onChange={handleChange}
          />
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            id="pwd"
            type="password"
            name="pwd"
            placeholder="Password"
            onChange={handleChange}
          />

          {error && <p className="register__form--message">{error.data}</p>}
          <div className="register__form--btn">
            <button type="submit">Register</button>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
