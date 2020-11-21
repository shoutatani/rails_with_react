import { Reducer } from "redux";
import { ACTION_TYPES, AdminAction } from "../actions";

export type AdminState = boolean;

export const AdminReducer: Reducer<AdminState, AdminAction> = (
  state = false,
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.BE_ADMIN:
      return true;
    case ACTION_TYPES.BE_NOT_ADMIN:
      return false;
    default:
      return state;
  }
};
