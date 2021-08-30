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
        payload: res.data,
      });
      sessionStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      dispatch({
        type: actionTypes.USER_FAIL,
        payload: error.response,
      });
    }
  };

export const registerUser =
  (emailRequest, passwordRequest, nameRequest) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.USER_REQUEST });
      const res = await axios.post(`/api/auth/register`, {
        fullname: nameRequest,
        email: emailRequest,
        password: passwordRequest,
      });
      dispatch({
        type: actionTypes.USER_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_FAIL,
        payload: error.response,
      });
    }
  };
