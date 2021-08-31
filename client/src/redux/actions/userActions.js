import * as actionTypes from "../constants/userConstants";
import axios from "axios";

export const loginUser =
  ({ email, pwd }) =>
  async (dispatch) => {
    try {
      //init state
      dispatch({ type: actionTypes.USER_REQUEST });

      //api call
      const options = {
        method: "put",
        url: "/api/auth/login",
        data: { email: email, password: pwd },
      };
      const res = await axios(options);

      //push data to store
      dispatch({
        type: actionTypes.USER_SUCCESS,
        payload: { ...res.data, isLogin: true },
      });
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      dispatch({
        type: actionTypes.USER_FAIL,
        payload:
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.response ||
          error.message ||
          error.toString(),
      });
    }
  };

export const registerUser =
  ({ name, email, pwd }) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.USER_REQUEST });
      const res = await axios.post(`/api/auth/register`, {
        fullname: name,
        email: email,
        password: pwd,
      });
      dispatch({
        type: actionTypes.USER_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_FAIL,
        payload:
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.response ||
          error.message ||
          error.toString(),
      });
    }
  };

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: actionTypes.USER_REQUEST });
  localStorage.removeItem("user");
};
