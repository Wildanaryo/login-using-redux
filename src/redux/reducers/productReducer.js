import { TYPES } from "../types.js";

const initState = {
  list: [],
  isLoading: false,
  isError: null,
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT_LOAD:
      return {
        ...state,
        isLoading: action.loadStat,
      };
    case TYPES.GET_PRODUCT_SUCCEDD:
      return {
        ...state,
        list: action.payload,
        isLoading: action.loadStat,
      };
    case TYPES.GET_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: action.loadStat,
        isError: action.payload,
      };
    case TYPES.GET_PRODUCT_LOGOUT:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
