import { TYPES } from "../types";

const initState = {
  token: null,
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_TOKEN_LOAD:
      return {
        ...state,
        isLoading: action.loadStat,
        isError: action.errStat,
      };
    case TYPES.GET_TOKEN_SUCCEDD:
      return {
        ...state,
        token: action.payload,
        isError: action.errorStat,
      };
    case TYPES.GET_TOKEN_FAIL:
      return {
        ...state,
        isError: action.errStat,
        isLoading: action.loadStat,
      };
    case TYPES.LOGOUT_SUCCEDD:
      return {
        ...state,
        token: action.payload,
        isLoading: action.loadStat,
      };

    default:
      return state;
  }
};
