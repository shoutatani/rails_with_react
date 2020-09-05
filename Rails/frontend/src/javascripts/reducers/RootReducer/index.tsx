import { combineReducers, Reducer } from "redux";

type LoginAction =
  | {
      type: "LOGIN";
      payload: {
        email: string;
        password: string;
      };
    }
  | {
      type: "LOGOUT";
    };

type LoginState = boolean;

export interface RootState {
  isLoggedIn: LoginState;
}

const LoginReducer: Reducer<LoginState, LoginAction> = (
  state = false,
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};

export const rootReducer = combineReducers<RootState>({
  isLoggedIn: LoginReducer,
});
