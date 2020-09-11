import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
// import setUser from "./redux/actions";
import { Provider } from "react-redux";

// store.dispatch(
//   setUser({
//     name: 1,
//   })
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
