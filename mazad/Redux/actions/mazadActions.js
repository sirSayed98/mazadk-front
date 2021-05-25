import axios from "axios";
import Cookies from "js-cookie";

import {
  CREATE_MAZAD,
  SINGLE_MAZAD,
} from "../constants/mazadConstants/endPoints";

import { GET_MAZAD_SUCCESS } from "../constants/mazadConstants/types";
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
        resolve("done");
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
