import * as actionTypes from "../constants/userConstants";

const user = JSON.parse(localStorage.getItem("user"));

export const userReducer = (state = { users: user || null }, action) => {
  switch (action.type) {
    case actionTypes.USER_REQUEST:
      return {
        loading: true,
        user: null,
      };
    case actionTypes.USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
