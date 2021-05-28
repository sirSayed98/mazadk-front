import axios from "axios";
import Cookies from "js-cookie";

import {
  CREATE_MAZAD,
  SINGLE_MAZAD,
  USER_CURRENT_MAZADS,
  CURRENT_MAZADS,
  USER_UP_COMING_MAZADS,
  UP_COMING_MAZADS,
} from "../constants/mazadConstants/endPoints";

import {
  GET_MAZAD_SUCCESS,
  GET_HOME_AUCTION_NOW_SUCCESS,
  GET_HOME_AUCTION_UP_COMING_SUCCESS,
} from "../constants/mazadConstants/types";
export const CreateMazad = (data) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(CREATE_MAZAD, data, config)
      .then((res) => {
        resolve(res.data.data._id);
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

export const GetSingleMazad = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .get(SINGLE_MAZAD + `/${id}`, config)
      .then((res) => {
        resolve(res.data.data);
        dispatch({
          type: GET_MAZAD_SUCCESS,
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

export const EditMazad = (id, data) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .put(SINGLE_MAZAD + `/${id}`, data, config)
      .then((res) => {
        resolve(res.data.data);
        dispatch({
          type: GET_MAZAD_SUCCESS,
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

export const HomeCurrentMazads = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: Cookies.get("token")
        ? `Bearer ${Cookies.get("token")}`
        : "",
      "Content-Type": "application/json",
    },
  };

  const endpoint = Cookies.get("token") ? USER_CURRENT_MAZADS : CURRENT_MAZADS;

  return new Promise((resolve, reject) => {
    axios
      .get(endpoint, config)
      .then((res) => {
        resolve(res.data.data);
        console.log(res.data.data);
        dispatch({
          type: GET_HOME_AUCTION_NOW_SUCCESS,
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

export const HomeUpComingMazads = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: Cookies.get("token")
        ? `Bearer ${Cookies.get("token")}`
        : "",
      "Content-Type": "application/json",
    },
  };

  const endpoint = Cookies.get("token")
    ? USER_UP_COMING_MAZADS
    : UP_COMING_MAZADS;

  return new Promise((resolve, reject) => {
    axios
      .get(endpoint, config)
      .then((res) => {
        resolve(res.data.data);
        console.log(res.data.data);
        dispatch({
          type: GET_HOME_AUCTION_UP_COMING_SUCCESS,
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
