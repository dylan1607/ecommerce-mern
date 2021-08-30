import * as actionTypes from "../constants/userConstants";

export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionTypes.USER_REQUEST:
      return {
        loading: true,
        users: [],
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
