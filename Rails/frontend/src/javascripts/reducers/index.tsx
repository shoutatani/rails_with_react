import { combineReducers } from "redux";
import { AdminReducer, AdminState } from "./AdminReducer";
import { LoginReducer, LoginState } from "./LoginReducer";

export interface RootState {
  isLoggedIn: LoginState;
  isAdmin: AdminState;
}

const rootReducer = combineReducers<RootState>({
  isLoggedIn: LoginReducer,
  isAdmin: AdminReducer,
});

export default rootReducer;
