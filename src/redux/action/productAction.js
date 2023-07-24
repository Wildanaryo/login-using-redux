import { TYPES } from "../types";

export const onProductLoad = (param) => {
  return {
    type: TYPES.GET_PRODUCT_LOAD,
    loadStat: param,
  };
};

export const onProductSucceed = (payload, load) => {
  return {
    type: TYPES.GET_PRODUCT_SUCCEDD,
    payload: payload,
    loadStat: load,
  };
};

export const onProductFail = (load, payload) => {
  return {
    type: TYPES.GET_PRODUCT_ERROR,
    loadStat: load,
    payload: payload,
  };
};
