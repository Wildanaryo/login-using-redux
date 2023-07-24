import { TYPES } from "../types";

export const onTokenLoad = (param) => {
  return {
    type: TYPES.GET_TOKEN_LOAD,
    payload: param,
  };
};
