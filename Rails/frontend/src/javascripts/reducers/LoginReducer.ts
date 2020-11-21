import { Reducer } from "redux";
import { ACTION_TYPES, LoginAction } from "../actions";

export type LoginState = boolean;
export const LoginReducer: Reducer<LoginState, LoginAction> = (
  state = false,
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return true;
    case ACTION_TYPES.LOGOUT:
      return false;
    default:
      return state;
  }
};
