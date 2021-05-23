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
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  MERCHANT_REGISTER_FAIL,
  MERCHANT_REGISTER_REQUEST,
  MERCHANT_REGISTER_SUCCESS,
  MERCHANT_GET_REQUESTS_REQUEST,
  MERCHANT_GET_REQUESTS_SUCCESS,
  MERCHANT_GET_REQUESTS_FAIL,
  UPDAT_ME_SUCCESS,
} from "../constants/userCosntants/types";

import {
  USER_LOGIN,
  USER_REGISTER,
  USER_LIST,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  EDIT_USER,
  MERCHANT_REQUEST,
  UPDATE_ME,
  MAZAD_STATIST,
  USER_UPLOAD,
  MAZAD_UPLOAD,
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
  dispatch({
    type: DELETE_USER_REQUEST,
  });

  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .delete(USER_LIST + `/${id}`, config)
      .then((res) => {
        resolve("done");
        dispatch({
          type: DELETE_USER_SUCCESS,
        });
        dispatch({
          type: REMOVE_USER,
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_FAIL,
          payload:
            error.response && error.response.data.error
              ? error.response.data.error
              : error.response,
        });
      });
  });
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

export const ResetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    await axios.put(RESET_PASSWORD + `/${token}`, {
      password: password,
    });

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
    });
  } catch (error) {
    console.log(error.reponse && error.reponse.data);
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response,
    });
  }
};

export const EditUser = (data, id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    dispatch({
      type: EDIT_USER_REQUEST,
    });
    axios
      .put(EDIT_USER + `/${id}`, data, config)
      .then((res) => {
        dispatch({
          type: EDIT_USER_SUCCESS,
          payload: res.data.data,
        });
        resolve("done");
      })
      .catch((error) => {
        dispatch({
          type: EDIT_USER_FAIL,
          payload:
            error.response && error.response.data.error
              ? error.response.data.error
              : error.response,
        });
      });
  });
};

export const MerchantRequest = (data) => async (dispatch) => {
  try {
    dispatch({
      type: MERCHANT_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(MERCHANT_REQUEST, data, config);

    console.log(res.data);

    dispatch({
      type: MERCHANT_REGISTER_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MERCHANT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response,
    });
  }
};

export const MerchantGetRequests = () => async (dispatch) => {
  try {
    dispatch({
      type: MERCHANT_GET_REQUESTS_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(MERCHANT_REQUEST, config);

    console.log(res.data);

    dispatch({
      type: MERCHANT_GET_REQUESTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: MERCHANT_GET_REQUESTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response,
    });
  }
};

export const DealRequests = (id, data) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .put(MERCHANT_REQUEST + `/${id}`, data, config)
      .then((res) => {
        console.log(res.data);
        resolve("done");
      })
      .catch((error) => {
        console.log(error.response.data.error);
        reject(error.response.data.error);
      });
  });
};

export const UpdateMe = (data) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .put(UPDATE_ME, data, config)
      .then((res) => {
        Cookies.set("userInfo", JSON.stringify(res.data.data));
        resolve("done");
        dispatch({
          type: UPDAT_ME_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const STATISTICS = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .get(MAZAD_STATIST, config)
      .then((res) => {
        console.log(res.data.data);
        resolve(res.data.data);
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const UploadPhoto = (form, target) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const endpoint = target === "user" ? USER_UPLOAD : MAZAD_UPLOAD;
  
  return new Promise((resolve, reject) => {
    axios
      .post(endpoint, form, config)
      .then((res) => {
        console.log(res.data.data);
        resolve("success");
        dispatch({
          type: UPDAT_ME_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};
