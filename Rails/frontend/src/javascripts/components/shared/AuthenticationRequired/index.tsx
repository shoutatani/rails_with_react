import * as React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../../../reducers/RootReducer";

export const AuthenticationRequired = (Component: React.FunctionComponent) => {
  return () => {
    const isLoggedIn = useSelector<RootState>((store) => store.isLoggedIn);
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn) {
      return <Component />;
    } else {
      return <Redirect to="/login" />;
    }
  };
};
