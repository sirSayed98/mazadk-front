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
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  REMOVE_USER,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_REQUEST,
} from "../constants/userCosntants/types";

import {
  USER_LOGIN,
  USER_REGISTER,
  USER_LIST,
  FORGET_PASSWORD,
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
export const Register = (data) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(USER_REGISTER, data, config);

    console.log(res.data.user);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response,
    });
  }
};

export const GetUserList = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(USER_LIST, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response,
    });
  }
};

export const DeleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    };

    await axios.delete(USER_LIST + `/${id}`, config);

    dispatch({
      type: DELETE_USER_SUCCESS,
    });
    dispatch({
      type: REMOVE_USER,
      payload: id,
    });
  } catch (error) {
    console.log(error.reponse.data.error);
    dispatch({
      type: DELETE_USER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response,
    });
  }
};

export const ForgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: FORGET_PASSWORD_REQUEST,
    });
    const res = await axios.post(FORGET_PASSWORD, { email: email });

    console.log(res.data.msg);
    dispatch({
      type: FORGET_PASSWORD_SUCCESS,
    });

  } catch (error) {
    console.log(error.reponse);
    dispatch({
      type: FORGET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response,
    });
  }
};
