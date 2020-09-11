import { createStore, combineReducers } from "redux";
import userReducer from "./reducers.js";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  undefined,
  composeWithDevTools()
);

export default store;
