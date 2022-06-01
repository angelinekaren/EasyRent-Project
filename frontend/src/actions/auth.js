import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  SET_MESSAGE,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAIL,
  REFRESH_TOKEN,
} from "../constants/user.constants";

import { authenticationService } from "../services/authentication.service";

export const registerTenant =
  (fullname, username, gender, email, password, role) => (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    return authenticationService
      .registerTenant(fullname, username, gender, email, password, role)
      .then(
        (res) => {
          dispatch({ type: USER_REGISTER_SUCCESS });
          dispatch({ type: SET_MESSAGE, payload: res.data.message });
          return Promise.resolve();
        },
        (err) => {
          const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
          dispatch({
            type: USER_REGISTER_FAIL,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });

          return Promise.reject();
        }
      );
  };

export const registerLanlord =
  (fullname, username, mobile_phone, email, password, role) => (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    return authenticationService
      .registerLanlord(fullname, username, mobile_phone, email, password, role)
      .then(
        (res) => {
          dispatch({ type: USER_REGISTER_SUCCESS });
          dispatch({ type: SET_MESSAGE, payload: res.data.message });
          return Promise.resolve();
        },
        (err) => {
          const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
          dispatch({
            type: USER_REGISTER_FAIL,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
          return Promise.reject();
        }
      );
  };

export const login = (email, password) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  return authenticationService.login(email, password).then(
    (data) => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: USER_LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  authenticationService.logout();
  dispatch({
    type: USER_LOGOUT,
  });
};

export const updateProfile = (userr) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_REQUEST });

  const {
    userLogin: { user },
  } = getState();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: user.accessToken,
    },
  };

  return await axios.put("http://localhost:5000/account/", userr, config).then(
    (res) => {
      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: { user: res.data },
      });
      localStorage.setItem("user", JSON.stringify(res.data));

      return Promise.resolve();
    },
    (err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: USER_UPDATE_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const changePassword = (passwords) => async (dispatch, getState) => {
  dispatch({ type: USER_CHANGE_PASSWORD_REQUEST });

  const {
    userLogin: { user },
  } = getState();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: user.accessToken,
    },
  };

  return await axios
    .put("http://localhost:5000/account/changePassword/", passwords, config)
    .then(
      (res) => {
        dispatch({
          type: USER_CHANGE_PASSWORD_SUCCESS,
          payload: { user: res.data },
        });
        localStorage.setItem("user", JSON.stringify(res.data));

        return Promise.resolve();
      },
      (err) => {
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        dispatch({
          type: USER_CHANGE_PASSWORD_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
};
