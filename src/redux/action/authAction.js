import { TYPES } from "../types.js";

export const onLogin = (param) => {
  return {
    type: TYPES.GET_TOKEN_SUCCEDD,
    payload: param,
  };
};

export const onFail = (err, load) => {
  return {
    type: TYPES.GET_TOKEN_FAIL,
    errStat: err,
    loadStat: load,
  };
};

export const onLoad = (load, err) => {
  return {
    type: TYPES.GET_TOKEN_LOAD,
    loadStat: load,
    errStat: err,
  };
};

export const onLogout = (param) => {
  return {
    type: TYPES.LOGOUT_SUCCEDD,
    payload: param,
  };
};
