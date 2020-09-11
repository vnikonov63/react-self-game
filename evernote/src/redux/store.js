import { createStore, combineReducers } from "redux";
import { userReducer, resultsReducer } from "./reducers.js";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({
    user: userReducer,
    results: resultsReducer,
  }),
  undefined,
  composeWithDevTools()
);

export default store;
