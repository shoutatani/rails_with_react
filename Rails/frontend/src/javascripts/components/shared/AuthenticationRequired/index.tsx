import * as React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../../../reducers";

export const AuthenticationRequired = (Component: React.ComponentType) => {
  return () => {
    const isLoggedIn = useSelector<RootState>((store) => store.isLoggedIn);
    if (isLoggedIn) {
      return <Component />;
    } else {
      return <Redirect to="/login" />;
    }
  };
};
