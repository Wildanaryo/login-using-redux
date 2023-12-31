import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";

export const reducers = combineReducers({
  authReducer,
  productReducer,
});
