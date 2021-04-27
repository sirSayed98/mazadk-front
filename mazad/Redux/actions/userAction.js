import axios from "axios";
import Cookies from "js-cookie";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_RESET,
} from "../constants/userCosntants/types";

import {
  USER_LOGIN,
  USER_REGISTER,
} from "../constants/userCosntants/endPoints";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(USER_LOGIN, { email, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.user,
    });

    Cookies.set("userInfo", JSON.stringify(data.user));
    Cookies.set("token", data.token);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response,
    });
  }
};
export const logout = () => (dispatch) => {
  Cookies.remove("userInfo");
  Cookies.remove("token");

  dispatch({ type: USER_LOGOUT });
  //dispatch({ type: USER_DETAILS_RESET });
};
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      USER_REGISTER,
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data.data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
