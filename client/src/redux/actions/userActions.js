import * as actionTypes from "../constants/userConstants";
import axios from "axios";

export const loginUser =
  ({ email, pwd }) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.USER_REQUEST });
      const options = {
        method: "put",
        url: "/api/auth/login",
        data: { email: email, password: pwd },
      };
      const { data } = await axios(options);
      dispatch({
        type: actionTypes.USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const registerUser =
  (emailRequest, passwordRequest, nameRequest) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.USER_REQUEST });
      const { data } = await axios.put(`/api/auth/register`, {
        fullname: nameRequest,
        email: emailRequest,
        password: passwordRequest,
      });
      dispatch({
        type: actionTypes.USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
