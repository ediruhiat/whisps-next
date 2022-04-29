import { AUTH } from "../constants";

const login = () => ({
  type: AUTH.LOGIN,
});

const setLogin = (loginData: any) => ({
  type: AUTH.LOGIN_SUCCESS,
  loginData,
});

const setLoginError = (error: any) => ({
  type: AUTH.LOGIN_FAIL,
  error,
});

const logout = () => ({
  type: AUTH.LOGOUT,
});

const setLogout = () => ({
  type: AUTH.LOGIN_SUCCESS,
});

const setLogoutError = (error: any) => ({
  type: AUTH.LOGOUT_FAIL,
  error,
});

export { login, setLogin, setLoginError, logout, setLogout, setLogoutError };
