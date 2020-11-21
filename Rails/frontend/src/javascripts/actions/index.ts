export enum ACTION_TYPES {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  BE_ADMIN = "BE_ADMIN",
  BE_NOT_ADMIN = "BE_NOT_ADMIN",
}

export type LoginAction =
  | {
      type: ACTION_TYPES.LOGIN;
    }
  | {
      type: ACTION_TYPES.LOGOUT;
    };

export type AdminAction =
  | { type: ACTION_TYPES.BE_ADMIN }
  | { type: ACTION_TYPES.BE_NOT_ADMIN };

export const Login = (): LoginAction => {
  return {
    type: ACTION_TYPES.LOGIN,
  };
};

export const Logout = (): LoginAction => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
