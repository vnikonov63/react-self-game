import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRouter({ children, ...rest }) {
  const isAuth = useSelector((state) => state.user);
  console.log(children, isAuth ? 1 : 2);

  return (
    <Route {...rest}>{isAuth ? children : <Redirect to="/login" />}</Route>
  );
}

export default PrivateRouter;
