import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
    const { email, pwd } = val;
    const vaild = /\S+@\S+\.\S+/;
    if (!vaild.test(email)) {
      returnData = {
        error: true,
        msg: "Invail Email",
      };
    }
    if (pwd.length < 1) {
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
      alert("Success!");
    }
  };
  return (
    <div className="login">
      <h2>LOGIN</h2>
      <form onSubmit={onSubmit} className="login__form">
        <input
          id="email"
          type="text"
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
        <div className="login__form--btn">
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
