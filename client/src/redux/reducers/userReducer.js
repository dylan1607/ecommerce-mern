import * as actionTypes from "../constants/userConstants";

export const userReducer = (
  state = { users: JSON.parse(sessionStorage.getItem("user")) || null },
  action
) => {
  switch (action.type) {
    case actionTypes.USER_REQUEST:
      return {
        loading: true,
        users: null,
      };
    case actionTypes.USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
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
