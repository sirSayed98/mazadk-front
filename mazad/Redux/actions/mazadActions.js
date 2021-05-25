import axios from "axios";
import Cookies from "js-cookie";
import {
    CREATE_MAZAD
} from "../constants/mazadConstants/endPoints";

import {

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
        resolve("done");
        console.log(res.data.data);
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
